import { combineReducers } from 'redux';

import newOrder from './newOrderReducer';
import pastOrders from './pastOrdersReducer';

export default combineReducers({
  nextOrder,
  pastOrders
})
