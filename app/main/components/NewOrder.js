import React from 'react';

export default class NewOrder extends React.Component {

  render() {
    let orderItems = this.props.order.items.map((item, i) => {
      return (
        <li className="order-info order-items" key={i}>
          <h6>{item} <i className="material-icons">close</i></h6>
        </li>
      )
    })

    return (
      <div className="col s3 new-order">
        <h4 className="order-number">Order #{this.props.order.number}</h4>
        <ul className="order-list">
          {orderItems}
        </ul>
      </div>
    )
  }
}
