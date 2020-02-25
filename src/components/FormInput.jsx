import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id,
  type,
  label,
  placeholder,
  input: {
    name,
    value,
    onFocus,
    onChange,
    onBlur,
  },
  meta: { touched, error },
}) => (
  <label className="d-block" htmlFor={id}>
    <div className="mb-1">{label}</div>

    <input
      id={id}
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    />

    {touched && ((error && <div className="invalid-feedback">{error}</div>))}
  </label>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onFocus: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormInput;
