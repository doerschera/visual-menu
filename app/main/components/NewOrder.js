import React from 'react';

export default class NewOrder extends React.Component {

  render() {
    return (
      <div className="col s3">
        <h4 className="order-number">Order #001</h4>
        <ul className="order-items">
          <li className="order-item">
            <h6>Double Cheeseburger</h6>
            <button>edit</button>
            <button>remove</button>
          </li>
        </ul>
      </div>
    )
  }
}
