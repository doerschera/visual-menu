import React from 'react';

export default class PastOrders extends React.Component {

  render() {
    let ordersReverse = this.props.pastOrders.reverse();
    let icon = <i className="material-icons">check_circle</i>
    let buttons = <div className="option-buttons">
      <button>edit</button>
      <button>remove</button>
    </div>

    let pastOrders = ordersReverse.map((order, i) => {
      return (
        <li className="order-info past-order" key={i}>
          <h6
            className={`order-status ${order.status}`}
          >
            Order #{order.number} : {order.items.length} items

            {order.status === 'open' ? icon : null}
          </h6>
          {order.status === 'open' ? buttons : null}
        </li>
      )
    })

    return (
      <div className="col s4">
        <div className='past-orders'>
          <h4 className="past-order-heading">Past Orders</h4>
          <ul className="order-list">
            {pastOrders}
          </ul>
        </div>
      </div>
    )
  }
}
