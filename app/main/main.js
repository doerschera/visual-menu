import React from 'react';
import Menu from './components/Menu';
import NewOrder from './components/NewOrder';

import menuItems from './menuItems';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      newOrder: {
        number: 1,
        items: [
          'Double Cheeseburger',
          'Fries',
          'Soda',
          'Combo #2'
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="greeting row">Place Order</h1>
          <div className="row">
            <Menu
              menuItems={menuItems}
            />
            <NewOrder
              order={this.state.newOrder}
            />
          </div>
        </div>
      </div>
    )
  }
}
