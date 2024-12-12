import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
  ApolloLink,
} from '@apollo/client';
import { BASE_GRAPHQL_URL, ETH_GRAPHQL_URL } from './constants';

const createApolloLink = (uri: string) => {
  return new HttpLink({
    uri,
    fetch,
  });
};

export const createApolloClient = (
  defaultOptions: DefaultOptions,
  link?: string
) => {
  let apolloLink = createApolloLink(link ? link : BASE_GRAPHQL_URL);
  console.log(apolloLink);
  // const httpLink = new HttpLink({
  //   uri: BASE_GRAPHQL_URL,
  //   fetch,
  // });

  return new ApolloClient({
    link: apolloLink,
    cache: new InMemoryCache(),
    defaultOptions,
  });
};

export const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const apolloClient = createApolloClient({});
export const noCacheApolloClient = createApolloClient(defaultOptions);

export default apolloClient;
