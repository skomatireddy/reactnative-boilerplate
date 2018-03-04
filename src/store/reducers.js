/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  debugger;
  return combineReducers({
    form,
    ...injectedReducers,
  });
}