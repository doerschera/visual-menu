import React from 'react';

import OpenOrders from './OpenOrder';

export default class PastOrders extends React.Component {

  displayOpenOrders() {
    let openOrders = this.props.pastOrders.filter((element) => {
      return element.status === 'open';
    })
    console.log(openOrders);

    if(openOrders.length) {
      return openOrders.map((order, i) => {
        return <OpenOrders
          key={order.number}
          order={order}
          i={i}
          handleOrderComplete={this.props.handleOrderComplete}
          handleEditOrder={this.props.handleEditOrder}
          handleCancelOrder={this.props.handleCancelOrder}
        />
      })
    } else {
      return null;
    }
  }

  displayClosedOrders() {
    let closedOrders = this.props.pastOrders.filter((element) => {
      return element.status === 'closed';
    })
    console.log(closedOrders);

    return closedOrders.map((order, i) => {
      return <h6
        key={order.number}
        className={`order-status ${order.status}`}
      >
        Order #{order.number} : {order.items.length} items
      </h6>
    })
  }

  render() {

    return (
      <div className="col s4">
        <div className='past-orders'>
          <h4 className="past-order-heading">Past Orders</h4>
          <div className="order-list">
            <div className="open-orders">
              {this.displayOpenOrders()}
            </div>
            <div className="closed-orders">
              {this.displayClosedOrders()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
