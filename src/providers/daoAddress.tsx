'use client';

import {
  BASE_DAO_ADDRESSES,
  BASE_GRAPHQL_URL,
  ETH_DAO_ADDRESSES,
  ETH_GRAPHQL_URL,
} from '@/utils/constants';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { Address, Chain } from 'viem';
import { base, mainnet } from 'viem/chains';
import { useChainId, useSwitchChain } from 'wagmi';

type daoAddressContextType = {
  GRAPHQL_URL: string;
  DAO_ADDRESSES: {
    token: Address;
    metadata: Address;
    auction: Address;
    treasury: Address;
    governor: Address;
  };
  chain: Chain;
};

const baseDaoAddress: daoAddressContextType = {
  GRAPHQL_URL: BASE_GRAPHQL_URL,
  DAO_ADDRESSES: BASE_DAO_ADDRESSES,
  chain: base,
};

const ethDaoAddress: daoAddressContextType = {
  GRAPHQL_URL: ETH_GRAPHQL_URL,
  DAO_ADDRESSES: ETH_DAO_ADDRESSES,
  chain: mainnet,
};

export const DaoAddressContext = createContext<
  daoAddressContextType | undefined
>(undefined);

export function DaoAddressProvider({ children }: { children: ReactNode }) {
  const chainId = useChainId();
  const contextValue = useMemo(() => {
    return chainId == base.id ? baseDaoAddress : ethDaoAddress;
  }, [chainId]);

  return (
    <DaoAddressContext.Provider value={contextValue}>
      {children}
    </DaoAddressContext.Provider>
  );
}

export function useDaoAddress() {
  const context = useContext(DaoAddressContext);
  if (context === undefined) {
    throw new Error('useDaoAddress must be used within a DaoAddressProvider');
  }
  return context;
}
