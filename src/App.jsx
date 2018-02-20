import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Components from 'Components';
import reducer from 'state';

const element = document.getElementById('App');

const store = createStore(reducer);

const renderApp = (App = Components) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    element,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./Components', () => renderApp(Components));
  module.hot.accept('./state', () => store.replaceReducer(reducer));
}
