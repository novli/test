import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from 'state';
import Page from 'Components';

const store = createStore(
  reducer,
  applyMiddleware(
    promiseMiddleware(),
    thunk,
  ),
);

const element = document.getElementById('App');

const renderApp = (App = Page) => {
  if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      element,
    );
  } else {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      element,
    );
  }
};

renderApp();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Components', () => renderApp(Page));
  module.hot.accept('./state', () => store.replaceReducer(reducer));
}
