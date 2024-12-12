import AUCTION_ABI from '@/utils/abis/auction';
import { BASE_DAO_ADDRESSES } from '@/utils/constants';
import { getConfig } from '@/utils/wagmi';
import { useEffect, useState } from 'react';
import { readContract } from 'wagmi/actions';

export const useAuction = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contractData = await readContract(getConfig(), {
          address: BASE_DAO_ADDRESSES.auction,
          abi: AUCTION_ABI,
          functionName: 'auction',
        });
        setData(contractData);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};
