import { Address } from 'viem';

export const WC_PROJECT_ID = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;
export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY as string;
export const RPC_URL = `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`;

export const BASE_GRAPHQL_URL = process.env
  .NEXT_PUBLIC_GRAPHQL_URL_BASE as string;

export const BASE_DAO_ADDRESSES = {
  token: process.env.NEXT_PUBLIC_TOKEN_BASE as Address,
  metadata: process.env.NEXT_PUBLIC_METADATA_BASE as Address,
  auction: process.env.NEXT_PUBLIC_AUCTION_BASE as Address,
  treasury: process.env.NEXT_PUBLIC_TREASURY_BASE as Address,
  governor: process.env.NEXT_PUBLIC_GOVERNOR_BASE as Address,
};

export const ETH_GRAPHQL_URL = process.env
  .NEXT_PUBLIC_GRAPHQL_URL_ETH as string;

export const ETH_DAO_ADDRESSES = {
  token: process.env.NEXT_PUBLIC_TOKEN_ETH as Address,
  metadata: process.env.NEXT_PUBLIC_METADATA_ETH as Address,
  auction: process.env.NEXT_PUBLIC_AUCTION_ETH as Address,
  treasury: process.env.NEXT_PUBLIC_TREASURY_ETH as Address,
  governor: process.env.NEXT_PUBLIC_GOVERNOR_ETH as Address,
};
