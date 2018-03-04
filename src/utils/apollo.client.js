import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { Constants } from './constants';

const hostUrl = 'https://localhost:8888';

const httpLink = createHttpLink({
  uri: `${hostUrl}/graphql`,
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Application: 'swiftAlertsMobile'
    }
  };
});

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default client;
