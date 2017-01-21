import React from 'react';

export default class Menu extends React.Component {
  mapItem(item, i) {
    return (
      <div className="menu-item" key={item}>{item}</div>
    )
  }

  render() {
    let comboItems = this.props.comboItems.map(this.mapItem);
    let aLaCarteItems = this.props.aLaCarteItems.map(this.mapItem);

    return (
      <div>
        <h4>Combos</h4>
        {comboItems}
        <h4>A La Carte</h4>
        {aLaCarteItems}
      </div>
    )
  }
}
