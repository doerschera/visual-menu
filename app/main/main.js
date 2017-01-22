import React from 'react';
import Menu from './components/Menu';

import menuItems from './menuItems';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {

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
          </div>
        </div>
      </div>
    )
  }
}
