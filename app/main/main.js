import React from 'react';
import Menu from './components/Menu';
import NewOrder from './components/NewOrder';
import PastOrders from './components/PastOrders';

import menuItems from './menuItems';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      orderCounter: 100,
      newOrder: {
        number: 102,
        items: [
          'Double Cheeseburger',
          'Fries',
          'Soda',
          'Combo #2'
        ],
        note: ''
      },
      pastOrders: [
        {
          number: 101,
          status: 'closed',
          items: [
            'Combo #2',
            'Soda'
          ],
          notes: ''
        },
        {
          number: 102,
          status: 'open',
          items: [
            'Combo #1',
            'Double Cheeseburger',
            'Fries'
          ],
          notes: 'Combo #1 Cheeseburger plain'
        }
      ]
    }

    this.menuItemOnClick = this.menuItemOnClick.bind(this);
  }

  menuItemOnClick(event) {
    if(this.state.newOrder.number) {

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
            <PastOrders
              pastOrders={this.state.pastOrders}
            />
          </div>
        </div>
      </div>
    )
  }
}
