import { fetchProposals } from '@/app/services/proposal';
import { BASE_DAO_ADDRESSES } from '@/utils/constants';
import GovernorClient from '../governor/governor';

async function GovernorCard() {
  const proposals = await fetchProposals(
    BASE_DAO_ADDRESSES.token,
    'proposalNumber',
    'desc',
    1000,
    {},
    false,
    true
  );

  return <GovernorClient defaultProposals={proposals} />;
}

export default GovernorCard;
