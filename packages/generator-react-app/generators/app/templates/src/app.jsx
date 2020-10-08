import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Page from './components/Page';

const domHook = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  domHook,
);

// enable hot module replacement
if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
  });
  module.hot.accept(function() {
    // module or one of its dependencies was just updated
  });
}
