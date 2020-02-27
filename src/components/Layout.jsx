import React from 'react';
import { useSelector } from 'react-redux';
import ResultPanel from './ResultPanel';
import Form from './Form';
import { getFormSubmittingState } from '../redux/slices/formSubmittingState';

const Layout = () => {
  const submittingState = useSelector(getFormSubmittingState);

  return (
    <>
      {submittingState === 'finished' && (
        <ResultPanel />
      )}

      {submittingState !== 'finished' && (
        <Form />
      )}
    </>
  );
};

Layout.propTypes = {

};

export default Layout;
