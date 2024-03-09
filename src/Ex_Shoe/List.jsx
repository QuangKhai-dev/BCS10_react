import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item) => {
      return (
        <Item
          handleClickAdd={this.props.handleAddToCart}
          handleClickView={this.props.handleViewDetail}
          key={item.id}
          data={item}
        />
      );
    });
  };
  render() {
    return <div className="row col-7">{this.renderListShoe()}</div>;
  }
}

let a = 2;
let b = a;
let c = b;
let d = c;
