import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Components from 'Components';

const element = document.getElementById('App');

const renderApp = (App = Components) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    element,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./Components', () => renderApp(Components));
}
