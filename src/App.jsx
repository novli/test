import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from 'state';
import Page from 'components/Page';

const store = createStore(
  reducer,
  applyMiddleware(
    promiseMiddleware(),
    thunk,
  ),
);

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

const element = document.getElementById('App');

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(
    <App />,
    element,
  );
} else {
  const { AppContainer } = require('react-hot-loader'); // eslint-disable-line import/no-extraneous-dependencies, global-require
  const renderApp = (HotApp = App) => {
    ReactDOM.render(
      <AppContainer>
        <HotApp />
      </AppContainer>,
      element,
    );
  };
  renderApp();

  if (module.hot) {
    module.hot.accept('./components/Page', () => renderApp(App));
    module.hot.accept('./state', () => store.replaceReducer(reducer));
  }
}

