import React from 'react';

export default class Menu extends React.Component {
  mapItem(item, i) {
    return (
      <li className="menu-item" key={item}>{item}</li>
    )
  }

  render() {
    let comboItems = this.props.comboItems.map(this.mapItem);
    let aLaCarteItems = this.props.aLaCarteItems.map(this.mapItem);

    return (
      <div className="menu">
        <h4>Combos</h4>
        <ul className="menu-list">
          {comboItems}
        </ul>
        <h4>A La Carte</h4>
        <ul className="menu-list">
          {aLaCarteItems}
        </ul>
      </div>
    )
  }
}
