import { network, run, config, tenderly } from 'hardhat'
import * as _ from 'lodash'
import ora from 'ora'

import {
  Example__factory,
} from '../src/gen/typechain'

import { UniversalDeployer } from '@0xsequence/deployer'
import { ContractFactory, BigNumber, providers } from 'ethers'
import fs from 'fs'

const prompt = ora()

/**
 * @notice Deploy contract via universal deployer
 */

const provider = new providers.Web3Provider(network.provider.send)
const signer = provider.getSigner()
const universalDeployer = new UniversalDeployer(network.name, signer.provider)
const txParams = {
  gasLimit: 6000000,
  gasPrice: BigNumber.from(10)
    .pow(9)
    .mul(16)
}

const attempVerify = async <T extends ContractFactory>(name: string, _: new () => T, address: string, ...args: Parameters<T["deploy"]>) => {
  try {
    await run("verify:verify", {
      address: address,
      constructorArguments: args,
    })
  } catch {}

  try {
    await tenderly.verify({
      name: name,
      address: address,
    })
  } catch {}
}

const buildNetworkJson = (...contracts: { name: string, address: string }[]) => {
  return contracts.map((c) => ({
    contractName: c.name,
    address: c.address
  }))
}

const main = async () => {
  prompt.info(`Network Name:           ${network.name}`)
  prompt.info(`Local Deployer Address: ${await signer.getAddress()}`)
  prompt.info(`Local Deployer Balance: ${await signer.getBalance()}`)

  // Deploying contracts
  const exampleContract = await universalDeployer.deploy('Example', Example__factory, txParams)

  // Logger
  prompt.start(`writing deployment information to ${network.name}.json`)
  fs.writeFileSync(`./src/networks/${network.name}.json`, JSON.stringify(buildNetworkJson(
    { name: "ExampleContract", address: exampleContract.address },
  ), null, 2))
  prompt.succeed()

  // Verifying contracts via Tenderly
  prompt.start(`verifying contracts`)
  await attempVerify("Factory", Example__factory, exampleContract.address)

  prompt.succeed()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => {
    process.exit(0)
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
