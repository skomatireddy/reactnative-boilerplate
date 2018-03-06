import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { Constants } from './constants';

const hostUrl = 'https://dizzee-dev.umusic.com/graphql';

const httpLink = createHttpLink({
  uri: `${hostUrl}`
  // credentials: 'include'
});

const authLink = setContext((_, { headers }) =>
  // return the headers to the context so httpLink can read them
  ({
    headers: {
      ...headers,
      Application: 'swiftTrends',
      'Content-Type': 'application/json',
      Cookie: 'swiftTrends=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNyaWthbnRoLktvbWF0aXJlZGR5QHVtdXNpYy5jb20iLCJpYXQiOjE1MjAzNTc5MjYsImV4cCI6MTUyMDM4NjcyNn0.3cd4IWJTTXLwArecJ0YWHMXY9L0wcFCwH50L1yvMSj4'
    }
  }));

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default client;
