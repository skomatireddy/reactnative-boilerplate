import { createSelector } from 'reselect';

const selectUser = (state) => state.auth;

const makeSelectUserToken = () => createSelector(
  selectUser,
  (token) => token
);

const makeSelectIsLoggedIn = () => createSelector(
  selectUser,
  (userLogin) => (userLogin)
);

const makeSelectUserObject = () => {
  return createSelector(
    selectUser,
    (userObject) => (userObject)
  );
};

export {
  selectUser,
  makeSelectUserToken,
  makeSelectIsLoggedIn,
  makeSelectUserObject,
};
