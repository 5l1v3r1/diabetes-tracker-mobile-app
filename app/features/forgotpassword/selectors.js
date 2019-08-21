import { createSelector } from 'reselect';

//very basic .. this has nothing to do with Reselect
export const getId = state => state.forgotPasswordReducer.id;

//an example to demonstrate how reselect works
export const getLoginState = createSelector(
    [getId],
    id => (id === -1 ? 'Not Signed up' : 'Signed up')
);
