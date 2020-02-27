import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import api from '../api';

const FormSelect = ({
  id,
  label,
  input: {
    name,
    value,
    onFocus,
    onChange,
    onBlur,
  },
  meta: { touched, error },
}) => {
  const [counties, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await api.fetchCountries();
      const newCountries = countries
        .map((country) => ({ id: uuidv4(), name: country.name, value: country.alpha2Code }));

      setCountries(newCountries);
    };

    fetchData();
  }, []);

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

      <select
        id={id}
        name={name}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClass}
      >
        <option value=""> </option>

        {
          counties.map((country) => (
            <option key={country.id} value={country.value}>{country.name}</option>
          ))
        }
      </select>

      {touched && ((error && <div className="invalid-feedback">{error}</div>))}
    </label>
  );
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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

export default FormSelect;
