'use client';

import { DaoAddressProvider } from '@/providers/daoAddress';
import { getConfig } from '@/utils/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';
import { type State, WagmiProvider } from 'wagmi';
import { Provider as ChakraProvider } from '../ui/provider';

export function Providers(props: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <DaoAddressProvider>
          <ChakraProvider>{props.children}</ChakraProvider>
        </DaoAddressProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
