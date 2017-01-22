import React from 'react';

export default class PastOrders extends React.Component {

  render() {
    return (
      <div className="col s4">
        <div className='past-orders'>
          <h4 className="past-order-heading">Past Orders</h4>
          <ul className="order-list">
            <li className="order-info past-order">
              <h6 className="order-status open">Order #100: 4 items</h6>
              <button>details</button>
              <button>remove</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
