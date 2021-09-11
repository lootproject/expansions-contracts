import * as ethers from 'ethers'
import { expect, RevertError} from './utils'

import { 
  LootRegistry, 
  MockExpansion, 
  MockExpansionNoFee, 
  MockExpansionNonCompliant
} from 'src/gen/typechain'
import { BigNumber } from 'ethers'

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

// Importing contract artifacts
const LootRegistryArtifact = artifacts.require('LootRegistry')
const MockExpansionArtifact = artifacts.require('MockExpansion')
const MockExpansionNoFeeArtifact = artifacts.require('MockExpansionNoFee')
const MockExpansionInvalidArtifact = artifacts.require('MockExpansionNonCompliant')

const fee = ethers.utils.parseUnits('0.01', 'ether')
const fee_recipient = ethers.Wallet.createRandom().address

contract('LootRegistry', () => {
  let registry: LootRegistry
  let expansion: MockExpansion
  let expansionNoFee: MockExpansionNoFee
  let registryInvalid: MockExpansionNonCompliant

  beforeEach(async () => {
    // Deploy contracts
    registry = await LootRegistryArtifact.new()
    expansion = await MockExpansionArtifact.new()
    expansionNoFee = await MockExpansionNoFeeArtifact.new()
    registryInvalid = await MockExpansionInvalidArtifact.new()
  })

  describe('registerLootExpansion()', () => {
    it(`should pass if expansion is valid`, async () => {
      const tx = registry.registerLootExpansion(expansion.address)
      await expect(tx).to.be.fulfilled
    })

    it(`should pass if expansion is doesn't implement fee interface`, async () => {
      const tx = registry.registerLootExpansion(expansionNoFee.address)
      await expect(tx).to.be.fulfilled
    })

    it(`should revert if expansion is already registered`, async () => {
      await registry.registerLootExpansion(expansion.address)
      const tx = registry.registerLootExpansion(expansion.address)
      await expect(tx).to.be.rejectedWith(RevertError("LootRegistry#registerLootExpansion: Expansion already registered"))
    })

    it(`should revert if expansion doesn't support lootExpansionTokenUri()`, async () => {
      const tx = registry.registerLootExpansion(registryInvalid.address)
      await expect(tx).to.be.rejectedWith(RevertError("LootRegistry#registerLootExpansion: Expansion doesn't support lootExpansionTokenUri"))
    })

    context('when valid expansion is registered()', () => {
      beforeEach(async () => {
        // Set fee on expansion
        await expansion.setFee(fee)
        await expansion.setRecipient(fee_recipient)

        // Register expansion
        await registry.registerLootExpansion(expansion.address)
      })

      it(`should add expansion to expansion array`, async () => {
        const expansions = await registry.getExpansions()
        await expect(expansions.length).to.be.eql(1)

        const expansions_address = await registry.expansions(0)
        await expect(expansions_address).to.be.eql(expansion.address)
      })


      it(`should set expansion id to 1`, async () => {
        const expansionID = await registry.expansionAddressToID(expansion.address)
        await expect(expansionID).to.be.eq.BN(1)
      })

      it(`should map id 1 to expansion address`, async () => {
        const expansionAddress = await registry.expansionIDtoAddress(1)
        await expect(expansionAddress).to.be.eql(expansion.address)
      })

      it(`should set claiming fee to expected value`, async () => {
        const _fee = await registry.claimingFee(expansion.address)
        await expect(_fee).to.be.eq.BN(fee.toString())
      })

      it(`should set fee recipient to expected value`, async () => {
        const _recipient = await registry.feeRecipient(expansion.address)
        await expect(_recipient).to.be.eql(fee_recipient)
      })
    })

    context('when expansion without fee interface is registered()', () => {
      beforeEach(async () => {
        // Register expansion
        await registry.registerLootExpansion(expansionNoFee.address)
      })

      it(`should add expansion to expansion array`, async () => {
        const _expansions = await registry.getExpansions()
        await expect(_expansions.length).to.be.eql(1)
      })

      it(`should set expansion id to 1`, async () => {
        const expansionID = await registry.expansionAddressToID(expansionNoFee.address)
        await expect(expansionID).to.be.eq.BN(1)
      })

      it(`should map id 1 to expansion address`, async () => {
        const expansionAddress = await registry.expansionIDtoAddress(1)
        await expect(expansionAddress).to.be.eql(expansionNoFee.address)
      })

      it(`should set claiming fee to 0`, async () => {
        const _fee = await registry.claimingFee(expansionNoFee.address)
        await expect(_fee).to.be.eq.BN(0)
      })

      it(`should set fee recipient to 0x0`, async () => {
        const _recpiient = await registry.feeRecipient(expansionNoFee.address)
        await expect(_recpiient).to.be.eql(ethers.constants.AddressZero)
      })
    })

  })
})
