import React from 'react';
import ReactDOM from 'react-dom';

import Components from 'Components';

const element = document.getElementById('App');

const renderApp = (App = Components) => {
  ReactDOM.render(
    <App />,
    element,
  );
};

renderApp();
