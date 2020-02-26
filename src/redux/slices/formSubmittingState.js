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
  },
});

const {
  formSubmitRequest,
  formSubmitSuccess,
  formSubmitFailure,
} = formSubmittingState.actions;

export const submitForm = (data, resetFn) => (dispatch) => {
  dispatch(formSubmitRequest());

  return api.submitForm()
    .then(() => {
      dispatch(formSubmitSuccess());

      resetFn();
    })
    .catch(() => {
      dispatch(formSubmitFailure());
    });
};

const actions = { ...formSubmittingState.actions, submitForm };

export { actions };

export const getFormSubmittingState = (state) => state.formSubmittingState;

export default formSubmittingState.reducer;
