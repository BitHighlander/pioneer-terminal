'use client';

import { auctionAbi } from '@/hooks/wagmiGenerated';
import { useDaoAddress } from '@/providers/daoAddress';
import { convertSparksToEth } from '@/utils/spark';
import { Button, Link as ChakraLink, HStack, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useCallback, useState } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { parseEther } from 'viem';
import { useAccount } from 'wagmi';
import { createUseWriteContract } from 'wagmi/codegen';
import { NumberInputField, NumberInputRoot } from '../ui/number-input';
import { Tooltip } from '../ui/tooltip';

interface BidProps {
  tokenId: bigint;
  winningBid: bigint;
  isAuctionRunning: boolean;
}

// @todo Add behavior to autoupdate the auction after a new bid or settle

export function AuctionBid(props: BidProps) {
  const { tokenId, winningBid, isAuctionRunning } = props;
  const [txHash, setTxHash] = useState<string | null>(null);
  const address = useDaoAddress();

  const account = useAccount();
  const [bidValue, setBidValue] = useState('1000');

  const useWriteAuctionCreateBid = createUseWriteContract({
    abi: auctionAbi,
    address: address.DAO_ADDRESSES.auction,
    functionName: 'createBid',
  });

  const { writeContractAsync: writeBid } = useWriteAuctionCreateBid();
  const onClickBid = useCallback(async () => {
    try {
      const txHash = await writeBid({
        args: [tokenId],
        value: parseEther(convertSparksToEth(bidValue)),
      });
      setTxHash(txHash);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        window.alert(`Error creating bid: ${error.message}`);
      } else {
        window.alert('Error creating bid');
      }
    }
  }, [writeBid, bidValue]);

  const useWriteAuctionSettleCurrentAndCreateNewAuction =
    createUseWriteContract({
      abi: auctionAbi,
      address: address.DAO_ADDRESSES.auction,
      functionName: 'settleCurrentAndCreateNewAuction',
    });

  const { writeContractAsync: writeSettle } =
    useWriteAuctionSettleCurrentAndCreateNewAuction();
  const onClickSettle = useCallback(async () => {
    try {
      const txHash = await writeSettle({});
      setTxHash(txHash);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        window.alert(`Error settling auction: ${error.message}`);
      } else {
        window.alert('Error settling auction');
      }
    }
  }, [writeSettle]);

  return (
    <VStack align={'stretch'} gap={0} w={'full'}>
      <HStack mt={4} w={'full'}>
        {isAuctionRunning ? (
          <>
            <NumberInputRoot
              maxW={{ md: '120px' }}
              w={'full'}
              defaultValue={bidValue}
              step={100}
              onValueChange={(datails) => setBidValue(datails.value)}
              disabled={account.isDisconnected}
              min={0}
            >
              <NumberInputField />
            </NumberInputRoot>
            <Button
              variant={'subtle'}
              onClick={onClickBid}
              disabled={
                account.isDisconnected ||
                !isAuctionRunning ||
                parseEther(bidValue) < winningBid
              }
            >
              Bid
            </Button>
          </>
        ) : (
          <Button
            variant={'solid'}
            onClick={onClickSettle}
            disabled={account.isDisconnected}
            w={{ base: 'full', md: 60 }}
          >
            Settle auction
          </Button>
        )}
      </HStack>
      <HStack maxW={'full'}>
        {txHash && (
          <ChakraLink asChild>
            <NextLink href={`https://basescan.org/tx/${txHash}`}>
              Transaction: {txHash.slice(0, 4)}...{txHash.slice(-4)}
              <LuExternalLink />
            </NextLink>
          </ChakraLink>
        )}
      </HStack>
    </VStack>
  );
}
