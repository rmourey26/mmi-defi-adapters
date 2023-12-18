/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface UniswapQuoterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WETH9"
      | "factory"
      | "quoteExactInput"
      | "quoteExactInputSingle"
      | "quoteExactOutput"
      | "quoteExactOutputSingle"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingle",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutput",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutputSingle",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
}

export interface UniswapQuoter extends BaseContract {
  connect(runner?: ContractRunner | null): UniswapQuoter;
  waitForDeployment(): Promise<this>;

  interface: UniswapQuoterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  WETH9: TypedContractMethod<[], [string], "view">;

  factory: TypedContractMethod<[], [string], "view">;

  quoteExactInput: TypedContractMethod<
    [path: BytesLike, amountIn: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  quoteExactInputSingle: TypedContractMethod<
    [
      tokenIn: AddressLike,
      tokenOut: AddressLike,
      fee: BigNumberish,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  quoteExactOutput: TypedContractMethod<
    [path: BytesLike, amountOut: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  quoteExactOutputSingle: TypedContractMethod<
    [
      tokenIn: AddressLike,
      tokenOut: AddressLike,
      fee: BigNumberish,
      amountOut: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  uniswapV3SwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, path: BytesLike],
    [void],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WETH9"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "quoteExactInput"
  ): TypedContractMethod<
    [path: BytesLike, amountIn: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quoteExactInputSingle"
  ): TypedContractMethod<
    [
      tokenIn: AddressLike,
      tokenOut: AddressLike,
      fee: BigNumberish,
      amountIn: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quoteExactOutput"
  ): TypedContractMethod<
    [path: BytesLike, amountOut: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quoteExactOutputSingle"
  ): TypedContractMethod<
    [
      tokenIn: AddressLike,
      tokenOut: AddressLike,
      fee: BigNumberish,
      amountOut: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3SwapCallback"
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, path: BytesLike],
    [void],
    "view"
  >;

  filters: {};
}
