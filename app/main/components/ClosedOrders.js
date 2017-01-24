import React from 'react';

export default class ClosedOrders extends React.Component {

  render() {
    return (
      <h6
        className={`order-status ${order.status}`}
      >
        Order #{order.number} : {order.items.length} items
      </h6>
    )
  }
}
