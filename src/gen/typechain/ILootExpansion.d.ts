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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ILootExpansionInterface extends ethers.utils.Interface {
  functions: {
    "claimFeeAmount()": FunctionFragment;
    "claimFeeRecipient()": FunctionFragment;
    "lootExpansionTokenUri(uint256)": FunctionFragment;
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

  events: {};
}

export class ILootExpansion extends Contract {
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

  interface: ILootExpansionInterface;

  functions: {
    claimFeeAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { feeAmount: BigNumber }>;

    "claimFeeAmount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { feeAmount: BigNumber }>;

    claimFeeRecipient(
      overrides?: CallOverrides
    ): Promise<[string] & { feeRecipient: string }>;

    "claimFeeRecipient()"(
      overrides?: CallOverrides
    ): Promise<[string] & { feeRecipient: string }>;

    lootExpansionTokenUri(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { tokenUri: string }>;

    "lootExpansionTokenUri(uint256)"(
      lootId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { tokenUri: string }>;
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
  };
}
