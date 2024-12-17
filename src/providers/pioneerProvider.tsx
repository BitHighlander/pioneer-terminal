'use client';

import Pioneer from '@pioneer-platform/pioneer-client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react';

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
