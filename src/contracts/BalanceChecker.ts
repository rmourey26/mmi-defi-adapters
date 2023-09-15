/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface BalanceCheckerInterface extends utils.Interface {
  functions: {
    "tokenBalance(address,address)": FunctionFragment;
    "balances(address[],address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "tokenBalance" | "balances"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokenBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [string[], string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;

  events: {};
}

export interface BalanceChecker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BalanceCheckerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    tokenBalance(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balances(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  tokenBalance(
    user: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balances(
    users: string[],
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    tokenBalance(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balances(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    tokenBalance(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balances(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenBalance(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balances(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
