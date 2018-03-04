import { AppRegistry } from 'react-native';
import App from './App';

// Needed for redux-saga es6 generator support
require('babel-polyfill');

// Import all the third party stuff
import React from 'react';
import { Provider } from 'react-redux';

import { ApolloProvider } from 'react-apollo';

import client from './src/utils/apollo.client';



import configureStore from './src/store/configureStore';
const initialState = {};
// Create redux store with history
const store = configureStore(initialState);

const SAMobile = () => {
  return(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  )
};


AppRegistry.registerComponent('swiftalertsmobile', () => SAMobile);