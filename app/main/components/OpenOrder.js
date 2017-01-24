import React from 'react';

export default class OpenOrders extends React.Component {


  render() {
    return (
      <div>
        <h6
          className={`order-status ${this.props.order.status}`}
        >
          Order #{this.props.order.number} : {this.props.order.items.length} items
          <i
            className="material-icons"
            data-number={this.props.order.number}
            onClick={this.props.handleOrderComplete}
          >check_circle</i>
        </h6>
        <div className="option-buttons">
          <button
            data-number={this.props.order.number}
            onClick={this.props.handleEditOrder}
          >edit</button>
          <button
            data-number={this.props.order.number}
            onClick={this.props.handleCancelOrder}
          >cancel</button>
        </div>
      </div>
    )
  }
}
