import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  // this.setState ~ update data nằm trong state
  handleTang = () => {
    console.log("tăng");
    // this.state.soLuong = 100;  update trực tiếp => lỗi

    this.setState({
      soLuong: this.state.soLuong + 1,
    });
  };
  handleGiam = (number) => {
    this.setState({
      soLuong: this.state.soLuong - number,
    });
  };
  render() {
    return (
      <div className="text-center">
        <button
          onClick={() => {
            this.handleGiam(10);
          }}
        >
          -
        </button>
        <strong>{this.state.soLuong}</strong>
        <button onMouseOver={this.handleTang}>+</button>
      </div>
    );
  }
}
