import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { Form as ReduxForm, Field, reduxForm } from 'redux-form';
import personnummer from 'personnummer';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');
const ssn = (value) => (personnummer.valid(value) ? undefined : 'Invalid ssn'); // for test use 198507099805

const Form = ({
  submitting,
  handleSubmit,
}) => {
  const onSubmit = (values) => {
    console.log('values:', values);
  };

  return (
    <div>
      <ReduxForm onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-3">Contact form</h2>

        <div className="form-group">
          <Field
            name="ssn"
            type="text"
            component={FormInput}
            id="ssn"
            label="Social security number"
            placeholder="Social security number"
            validate={[required, ssn]}
          />
        </div>

        <div className="form-group">
          <Field
            name="phone"
            type="tel"
            component={FormInput}
            id="phone"
            label="Phone number"
            placeholder="Phone number"
            validate={[required]}
          />
        </div>

        <div className="form-group">
          <Field
            name="email"
            type="text"
            component={FormInput}
            id="email"
            label="Email address"
            placeholder="Email address"
            validate={[required]}
          />
        </div>

        <div className="form-group">
          <Field
            name="country"
            component={FormSelect}
            id="country"
            label="Country"
            validate={[required]}
          />
        </div>

        <div className="d-flex justify-content-center pt-2">
          <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
        </div>
      </ReduxForm>
    </div>
  );
};

Form.propTypes = {
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default flow(
  reduxForm({
    form: 'contact',
  }),
)(Form);
