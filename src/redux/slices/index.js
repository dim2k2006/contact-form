import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import formSubmittingState, { actions as formSubmittingStateActions } from './formSubmittingState';


export default combineReducers({
  form: formReducer,
  formSubmittingState,
});

const actions = {
  ...formSubmittingStateActions,
};

export { actions };
