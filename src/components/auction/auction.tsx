'use client';

import { Auction, fetchAuction } from '@/services/auction';
import { weiToSparks } from '@/utils/spark';
import { Badge, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { default as NextImage } from 'next/image';
import { AuctionBid } from '../auction/bid';
import { FormattedAddress } from '../utils/ethereum';
import { useEffect, useState } from 'react';
import { useDaoAddress } from '@/providers/daoAddress';
import { useChainId } from 'wagmi';

export default function AuctionClient({
  activeAuction,
}: {
  activeAuction: Auction;
}) {
  const [auction, setAuction] = useState<Auction>(activeAuction);
  const daoAddress = useDaoAddress();
  const chainId = useChainId();
  console.log('DAO ADDRESS', daoAddress.DAO_ADDRESSES.token);
  console.log('CHAIN ID', chainId);

  useEffect(() => {
    const fetchLastAuction = async () => {
      const auctions = await fetchAuction(
        daoAddress.DAO_ADDRESSES.token,
        'endTime',
        'desc',
        1,
        chainId
      );
      const activeAuction = auctions[0];
      setAuction(activeAuction);
    };
    fetchLastAuction();
  }, [daoAddress]);

  const isAuctionRunning =
    parseInt(auction?.endTime || '0') * 1000 > Date.now();

  return (
    <VStack
      shadow={'sm'}
      w={'full'}
      padding={4}
      rounded={'md'}
      gap={4}
      _dark={{ borderColor: 'yellow', borderWidth: 1 }}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        align={'start'}
        justify={'space-between'}
        w={'full'}
      >
        <VStack align={'stretch'} gap={2} w={'full'}>
          <Heading as='h2'>Auction #{auction?.token.tokenId}</Heading>
          {auction?.highestBid ? (
            <VStack align={'start'} gap={1}>
              <Text>
                Highest bid:{' '}
                <Badge colorPalette={'blue'} variant={'surface'} size={'sm'}>
                  ✧{weiToSparks(auction?.highestBid.amount)}{' '}
                </Badge>
              </Text>
              <FormattedAddress
                address={auction?.highestBid.bidder}
                textBefore='Highest bidder: '
              />
            </VStack>
          ) : (
            <Text>No bids {isAuctionRunning ? 'yet' : ''}</Text>
          )}
          <AuctionBid
            tokenId={auction?.token.tokenId}
            winningBid={
              auction?.winningBid ? BigInt(auction?.winningBid.amount) : 0n
            }
            isAuctionRunning={isAuctionRunning}
          />
        </VStack>
        <Image asChild rounded={'md'} w={'full'} maxW={{ md: '240px' }}>
          <NextImage
            width={1024}
            height={1024}
            src={auction?.token.image}
            alt={`Auction token id ${auction?.token.tokenId}`}
          />
        </Image>
      </Stack>
    </VStack>
  );
}
