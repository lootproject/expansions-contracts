/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockExpansionInterface extends ethers.utils.Interface {
  functions: {
    "claimFeeAmount()": FunctionFragment;
    "claimFeeRecipient()": FunctionFragment;
    "lootExpansionTokenUri(uint256)": FunctionFragment;
    "maxSupply()": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setRecipient(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimFeeAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimFeeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lootExpansionTokenUri",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "maxSupply", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipient",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lootExpansionTokenUri",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecipient",
    data: BytesLike
  ): Result;

  events: {};
}

export class MockExpansion extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockExpansionInterface;

  functions: {
    claimFeeAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "claimFeeAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimFeeRecipient(overrides?: CallOverrides): Promise<[string]>;

    "claimFeeRecipient()"(overrides?: CallOverrides): Promise<[string]>;

    lootExpansionTokenUri(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "lootExpansionTokenUri(uint256)"(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    maxSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFee(
      _feeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFee(uint256)"(
      _feeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRecipient(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setRecipient(address)"(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimFeeAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "claimFeeAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  claimFeeRecipient(overrides?: CallOverrides): Promise<string>;

  "claimFeeRecipient()"(overrides?: CallOverrides): Promise<string>;

  lootExpansionTokenUri(
    lootId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "lootExpansionTokenUri(uint256)"(
    lootId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "maxSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  setFee(
    _feeAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFee(uint256)"(
    _feeAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRecipient(
    _feeRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setRecipient(address)"(
    _feeRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimFeeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "claimFeeAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimFeeRecipient(overrides?: CallOverrides): Promise<string>;

    "claimFeeRecipient()"(overrides?: CallOverrides): Promise<string>;

    lootExpansionTokenUri(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "lootExpansionTokenUri(uint256)"(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "maxSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFee(_feeAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setFee(uint256)"(
      _feeAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecipient(
      _feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRecipient(address)"(
      _feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claimFeeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "claimFeeAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    "claimFeeRecipient()"(overrides?: CallOverrides): Promise<BigNumber>;

    lootExpansionTokenUri(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lootExpansionTokenUri(uint256)"(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "maxSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFee(
      _feeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFee(uint256)"(
      _feeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRecipient(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setRecipient(address)"(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimFeeAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "claimFeeAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFeeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "claimFeeRecipient()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lootExpansionTokenUri(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lootExpansionTokenUri(uint256)"(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFee(
      _feeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFee(uint256)"(
      _feeAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRecipient(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setRecipient(address)"(
      _feeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
