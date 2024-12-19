import {
  Web3Function,
  Web3FunctionContext,
} from "@gelatonetwork/web3-functions-sdk";
import { encodeFunctionData } from "viem";
import abi from "./SimpleContract.json";
Web3Function.onRun(async (context: Web3FunctionContext) => {
  const { userArgs } = context;

  const contractAddress = (userArgs.address as string) ?? "contract address";
  const execData = encodeFunctionData({
    abi: abi.abi,
    functionName: "increment",
  });
  // Return execution call data
  return {
    canExec: true,
    callData: [
      {
        to: contractAddress,
        data: execData,
      },
    ],
  };
});
