import axios from 'axios';
import get from 'lodash/get';

const fetchCountries = async () => {
  const cache = get(fetchCountries, 'cache');

  if (cache) return cache;

  const response = await axios.get('https://restcountries.eu/rest/v2/all');
  const data = get(response, 'data', []);

  fetchCountries.cache = data;

  return data;
};

fetchCountries.cache = null;

export default {
  fetchCountries,
  submitForm: () => new Promise((resolve) => resolve()),
};
