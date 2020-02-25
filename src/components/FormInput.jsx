import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
}) => {
  const isInvalid = touched && !!error;
  const isValid = touched && !error;

  const inputClass = cn({
    'form-control': true,
    'is-invalid': isInvalid,
    'is-valid': isValid,
  });

  return (
    <label className="d-block" htmlFor={id}>
      <div className="mb-1">{label}</div>

      <input
        id={id}
        type={type}
        name={name}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
      />

      {isInvalid && (<div className="invalid-feedback">{error}</div>)}
    </label>
  );
};

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
    error: PropTypes.string,
  }).isRequired,
};

export default FormInput;
