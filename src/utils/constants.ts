import { Address } from 'viem';

export const WC_PROJECT_ID = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;
export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY as string;
export const RPC_URL = `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`;

export const BASE_GRAPHQL_URL = process.env
  .NEXT_PUBLIC_GRAPHQL_URL_BASE as string;

export const BASE_DAO_ADDRESSES = {
  token: "0xd0d31f743d5f7e8fcf4add1bdb198f07241a4f23" as Address,
  metadata: "0x6127f757b827284ff24335cfe8fd7e51fd0cd8f6" as Address,
  auction: "0x2572ea2771f4ef38bdb1bf62ec3eade9ae926978" as Address,
  treasury: "0xa68de7644eef30f0eff42dfd01668ee0a19d9972" as Address,
  governor: "0x92000095a2a5cabda370d4a482da7106ef381444" as Address,
};

export const ETH_GRAPHQL_URL = process.env
  .NEXT_PUBLIC_GRAPHQL_URL_ETH as string;

export const ETH_DAO_ADDRESSES = {
  token: "0x25ef864904d67e912b9ec491598a7e5a066b102f" as Address,
  metadata: "0x0e1cdf34e15414c6afdd4e75bd2dbcac5e8cc8e4" as Address,
  auction: "0x360e2f3d92d23de8e5d8a461c2544aaf01eba549" as Address,
  treasury: "0x78795d7117cb9b1227fa8c2ff2df7ce5b1fdf6e1" as Address,
  governor: "0xe0f821d6cc2ab0d0660023a10340dc267120c9d4" as Address,
};
