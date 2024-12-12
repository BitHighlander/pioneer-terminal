import { fetchAuction } from '@/services/auction';
import { BASE_DAO_ADDRESSES } from '@/utils/constants';
import AuctionClient from '../auction/auction';

export default async function AuctionCard() {
  const auctions = await fetchAuction(
    BASE_DAO_ADDRESSES.token,
    'endTime',
    'desc',
    1
  );
  const activeAuction = auctions[0];
  const isAuctionRunning =
    parseInt(activeAuction?.endTime || '0') * 1000 > Date.now();
  console.log(
    activeAuction?.endTime,
    parseInt(activeAuction?.endTime) * 1000,
    Date.now(),
    isAuctionRunning
  );

  return <AuctionClient activeAuction={auctions[0]} />;
}
