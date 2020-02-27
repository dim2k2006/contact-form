import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const formSubmittingState = createSlice({
  name: 'formSubmittingState',
  initialState: 'none',
  reducers: {
    formSubmitRequest() {
      return 'requested';
    },
    formSubmitSuccess() {
      return 'finished';
    },
    formSubmitFailure() {
      return 'failed';
    },
    formSubmitReset() {
      return 'none';
    },
  },
});

const {
  formSubmitRequest,
  formSubmitSuccess,
  formSubmitFailure,
  formSubmitReset,
} = formSubmittingState.actions;

export const submitForm = (data, resetFn) => (dispatch) => {
  dispatch(formSubmitRequest());

  return api.submitForm()
    .then(() => {
      console.log('Success');

      dispatch(formSubmitSuccess());

      resetFn();

      setTimeout(() => {
        dispatch(formSubmitReset());
      }, 5000);
    })
    .catch(() => {
      dispatch(formSubmitFailure());
    });
};

const actions = { ...formSubmittingState.actions, submitForm };

export { actions };

export const getFormSubmittingState = (state) => state.formSubmittingState;

export default formSubmittingState.reducer;
