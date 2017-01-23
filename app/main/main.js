import React from 'react';
import { connect } from 'react-redux';

import {
  startNewOrder,
  addItem,
  removeItem,
  updateNote,
  submitNewOrder}
from '../actions/newOrderActions';

import Menu from './components/Menu';
import NewOrder from './components/NewOrder';
import PastOrders from './components/PastOrders';

import menuItems from './menuItems';

// connect to store
@connect((store) => {
  return {
    orderCounter: store.newOrder.orderCounter,
    pastOrders: store.newOrder.pastOrders,
    newOrder: store.newOrder.newOrder
  }
})

export default class Main extends React.Component {
  constructor() {
    super();

    this.menuItemOnClick = this.menuItemOnClick.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
    this.noteOnChange = this.noteOnChange.bind(this);
    this.submitNewOrder = this.submitNewOrder.bind(this);
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

  noteOnChange(event) {
    this.props.dispatch(updateNote(event.target.value))
  }

  submitNewOrder() {
    this.props.dispatch(submitNewOrder([this.props.newOrder]))
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
              handleNoteChange={this.noteOnChange}
              handleSubmit={this.submitNewOrder}
            />
            <PastOrders
              pastOrders={this.props.pastOrders}
            />
          </div>
        </div>
      </div>
    )
  }
}
