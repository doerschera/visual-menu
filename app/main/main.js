import React from 'react';
import Menu from './components/Menu';
import NewOrder from './components/NewOrder';
import PastOrders from './components/PastOrders';

import menuItems from './menuItems';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
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
          number: 102,
          open: true,
          items: [
            'Combo #1',
            'Double Cheeseburger',
            'Fries'
          ],
          notes: 'Combo #1 Cheeseburger plain'
        },
        {
          number: 101,
          open: false,
          items: [
            'Combo #2',
            'Soda'
          ],
          notes: ''
        }
      ]
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
