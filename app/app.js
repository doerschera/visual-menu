import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import routes from './config/routes';

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('app'));
