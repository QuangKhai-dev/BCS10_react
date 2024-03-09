import React, { useState } from "react";

const DemoForm = () => {
  const [hoTen, setHoTen] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    // setState lại giá trị cho hoTen
    setHoTen(event.target.value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault để ngăn chặn sự kiện load trang
    event.preventDefault();
    console.log(hoTen);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} id="hoTen" value={hoTen} />
        <button type="submit">Xác nhận</button>
      </form>
    </div>
  );
};

export default DemoForm;
