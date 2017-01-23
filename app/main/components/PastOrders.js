import React from 'react';

export default class PastOrders extends React.Component {

  render() {
    let pastOrders = this.props.pastOrders.map((order, i) => {
      return (
        <li className="order-info past-order" key={i}>
          <h6
            className={`order-status ${order.status}`}
          >
            Order #{order.number} : {order.items.length} items

            {order.status === 'open' ?
              <i
                className="material-icons"
                data-index={i}
                onClick={this.props.handleOrderComplete}
              >check_circle</i> : null}
          </h6>
          {order.status === 'open' ?
            <div className="option-buttons">
              <button
                data-number={order.number}
                onClick={this.props.handleEditOrder}
              >edit</button>
              <button
                data-number={order.number}
                onClick={this.props.handleCancelOrder}
              >cancel</button>
            </div>
          : null}
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
