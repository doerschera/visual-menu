import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../main/main';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>
)
