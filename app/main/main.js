import React from 'react';
import { connect } from 'react-redux';

import {
  startNewOrder,
  addItem,
  removeItem,
  updateNote,
  submitNewOrder,
  orderComplete,
  cancelOrder,
  editOrder,
  alertManager
}from '../actions/orderActions';

import Menu from './components/Menu';
import NewOrder from './components/NewOrder';
import PastOrders from './components/PastOrders';
import ManagerAlert from './components/ManagerAlert';

import menuItems from './menuItems';

// connect to store
@connect((store) => {
  return {
    orderCounter: store.orders.orderCounter,
    pastOrders: store.orders.pastOrders,
    newOrder: store.orders.newOrder,
    alertManager: store.orders.alertManager
  }
})

export default class Main extends React.Component {
  constructor() {
    super();

    this.menuItemOnClick = this.menuItemOnClick.bind(this);
    this.removeMenuItem = this.removeMenuItem.bind(this);
    this.noteOnChange = this.noteOnChange.bind(this);
    this.submitNewOrder = this.submitNewOrder.bind(this);
    this.markOrderComplete = this.markOrderComplete.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  componentDidUpdate() {
    let openOrders = this.props.pastOrders.filter((order) => {
      return order.status === 'open';
    })

    console.log(openOrders.length);
    console.log(this.props.alertManager)
;    if(openOrders.length > 4 && !this.props.alertManager) {
      this.props.dispatch(alertManager())
    } else if (openOrders.length <= 4 && this.props.alertManager) {
      this.props.dispatch(alertManager())
    }
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
    let newOrder = [this.props.newOrder];
    this.props.dispatch(submitNewOrder(newOrder))
  }

  markOrderComplete(event) {
    this.props.dispatch(orderComplete(event.target.getAttribute('data-index')))
  }

  cancelOrder(event) {
    let orderNumber = parseInt(event.target.getAttribute('data-number'));
    this.props.dispatch(cancelOrder(orderNumber));
  }

  editOrder(event) {
    let orderNumber = parseInt(event.target.getAttribute('data-number'));
    this.props.dispatch(editOrder(orderNumber));
  }

  closeAlert() {
    this.props.dispatch(alertManager());
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
              handleOrderComplete={this.markOrderComplete}
              handleCancelOrder={this.cancelOrder}
              handleEditOrder={this.editOrder}
              alertManager={this.props.alertManager}
            />
          {this.props.alertManager ? <ManagerAlert/> : null}
          </div>
        </div>
      </div>
    )
  }
}
