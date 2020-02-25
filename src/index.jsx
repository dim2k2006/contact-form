import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducer from './redux/slices';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

const store = configureStore({
  reducer,
});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
