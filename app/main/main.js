import React from 'react';
import Menu from './components/Menu';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      comboItems: ['#1 Burger Combo', '#2 Burger Combo', '#3 Burger Combo', '#4 Chicken Combo', '#5 Chicken Combo'],
      aLaCarteItems: ['Hamburger', 'Cheeseburger', 'Double Cheeseburger', 'Medium French Fries', 'Chicken Sandwhich', 'Medium Soda']
    }
  }

  render() {
    return (
      <div>
        <h1>Place Order</h1>
        <Menu
          comboItems={this.state.comboItems}
          aLaCarteItems={this.state.aLaCarteItems}
        />
      </div>
    )
  }
}
