import React from 'react';

export default class NewOrder extends React.Component {

  render() {
    let orderItems = this.props.order.items.map((item, i) => {
      return (
        <li className="order-item" key={i}>
          <h6>{item}</h6>
          <button>edit</button>
          <button>remove</button>
        </li>
      )
    })

    return (
      <div className="col s3 new-order">
        <h4 className="order-number">Order #{this.props.order.number}</h4>
        <ul className="order-items">
          {orderItems}
        </ul>
      </div>
    )
  }
}
