// In App component file
'use client';

import AccountCard from '@/components/cards/account';
import AuctionCard from '@/components/cards/auction';
import GovernorCard from '@/components/cards/governor';
import ZoraCard from '@/components/cards/zora';
import { HStack, VStack } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { Index } from '@/components/pioneerIntro/index';

function App() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <VStack gap={4} align={'start'}>
        <Index />
      </VStack>
    );
  }

  return (
    <VStack gap={4} align={'start'}>
      <AccountCard />
      <AuctionCard />
      <GovernorCard />
    </VStack>
  );
}

export default App;
