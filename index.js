import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import 'babel-polyfill';
import App from './App';
import client from './src/utils/apollo.client';
import configureStore from './src/store/configureStore';

const initialState = {};
// Create redux store with history
const store = configureStore(initialState);

const SAMobile = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  );
};


AppRegistry.registerComponent('swiftalertsmobile', () => SAMobile);
