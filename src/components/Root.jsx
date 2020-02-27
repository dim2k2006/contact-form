import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './Layout';

const Root = ({ store }) => (
  <Provider store={store}>
    <section className="Root p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <Layout />
          </div>
        </div>
      </div>
    </section>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default Root;
