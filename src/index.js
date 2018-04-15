import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);