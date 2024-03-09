import React, { Component } from "react";

export default function Card({ imgSrc, titleCard, username, handleClick }) {
  // render() {
  // this.props ~ nhận data từ component cha truyền vào dưới dạng object
  return (
    <div className="card text-left">
      <img className="card-img-top w-25" src={imgSrc} alt />
      <div className="card-body">
        <h4 className="card-title">{titleCard}</h4>
        <p className="display-2">{username}</p>
        <button onClick={handleClick} className="btn-warning">
          Change name
        </button>
      </div>
    </div>
  );
}
// state ở đâu, setState tại đó
