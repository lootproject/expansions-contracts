import * as ethers from 'ethers'
import { expect} from './utils'

import { Example } from 'src/gen/typechain'

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

// Importing contract artifacts
const ExampleArtifact = artifacts.require('Example')

contract('Example', () => {
  let contract

  before(async () => {
    // Deploy contract
    contract = (await ExampleArtifact.new()) as Example
  })

  beforeEach(async () => {
    // Can setup additional things before each test
  })

  describe('Implement all interfaces for ERC165 on MainModule', () => {
    beforeEach(async () => {
      // Can setup additional things before each test in this section
    })

    it(`Should return true if argument is true`, async () => {
      const isExample = await contract.isExample(true)
      expect(isExample).to.be.true
    })
  })
})
