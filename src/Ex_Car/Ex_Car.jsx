import React, { Component, useState } from "react";

// sử dụng hình ảnh nằm trong folder public => dẫn url từ html
// export default class Ex_Car extends Component {
export default function Ex_Car() {
  // state = {
  //   color: "red",
  // };
  let [color, setColor] = useState("red");
  // hanldeChangeColor = (color) => this.setState({ color: color });
  let hanldeChangeColor = (rewColor) => setColor(rewColor);

  // render() {
  let url = `./imageSrc/CarBasic/products/${color}-car.jpg`;
  return (
    <div className="container">
      <img
        style={{
          width: "40%",
        }}
        src={url}
        alt=""
      />
      <button onClick={() => hanldeChangeColor("red")} className="btn-danger">
        Red
      </button>
      <button onClick={() => hanldeChangeColor("black")} className="btn-dark">
        Black
      </button>
      <button onClick={() => hanldeChangeColor("silver")} className="btn-secondary">
        Silver
      </button>
    </div>
  );
}
// }
