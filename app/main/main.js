import React from 'react';
import { connect } from 'react-redux';

import { startNewOrder, addItem, removeItem } from '../actions/newOrderActions';

import Menu from './components/Menu';
import NewOrder from './components/NewOrder';
import PastOrders from './components/PastOrders';

import menuItems from './menuItems';

// connect to store
@connect((store) => {
  return {
    orderCounter: store.newOrder.orderCounter,
    newOrder: store.newOrder.newOrder
  }
})

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      pastOrders: [
        {
          number: 101,
          status: 'closed',
          items: [
            'Combo #2',
            'Soda'
          ],
          notes: ''
        },
        {
          number: 102,
          status: 'open',
          items: [
            'Combo #1',
            'Double Cheeseburger',
            'Fries'
          ],
          notes: 'Combo #1 Cheeseburger plain'
        }
      ]
    }

    this.menuItemOnClick = this.menuItemOnClick.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
  }

  menuItemOnClick(event) {
    let menuItem = [event.target.getAttribute('data-name')];
    console.log(menuItem);
    if(this.props.newOrder.number) {
      this.props.dispatch(addItem(menuItem))
    } else {
      this.props.dispatch(startNewOrder(menuItem))
    }
  }

  removeMenuItem(event) {
    this.props.dispatch(removeItem(event.target.getAttribute('data-item')))
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="greeting row">Place Order</h1>
          <div className="row">
            <Menu
              menuItems={menuItems}
              handleOnClick={this.menuItemOnClick}
            />
            <NewOrder
              order={this.props.newOrder}
              handleRemoveItem={this.removeMenuItem}
            />
            <PastOrders
              pastOrders={this.state.pastOrders}
            />
          </div>
        </div>
      </div>
    )
  }
}
