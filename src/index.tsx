import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadState } from './shared/api';
import { reducer } from './shared/app.context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './shared/redux/store';


// const store = createStore(
//   dispatch,
//   initialState ,// not necessary, but nice for debugging
// );

// // save the state whenever the Redux store changes
// store.subscribe(() => {
//   const state = store.getState();

// });

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
