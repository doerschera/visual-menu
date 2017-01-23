import React from 'react';

export default class Menu extends React.Component {

  render() {
    let menuItems = this.props.menuItems.map((item, i) => {
      return (
        <div className="col s6" key={i} onClick={this.props.handleOnClick}>
          <li className="menu-item">
            <img
              src={item.icon} data-name={item.name}
            ></img>
          </li>
          <p className="menu-item-name">{item.name}</p>
        </div>
      )
    })

    return (
      <div className="col m5 menu">
        <ul className="menu-list">
          {menuItems}
        </ul>
      </div>
    )
  }
}
