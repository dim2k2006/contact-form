import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import get from 'lodash/get';
import { v4 as uuidv4 } from 'uuid';

const fetchCountries = async () => {
  const response = await axios.get('https://restcountries.eu/rest/v2/all');

  return get(response, 'data', []);
};

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
      const countries = await fetchCountries();
      const newCountries = countries
        .map((country) => ({ id: uuidv4(), name: country.name, value: country.alpha2Code }));

      setCountries(newCountries);
    };

    fetchData();
  }, []);

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
        className="form-control"
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
    error: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormSelect;
