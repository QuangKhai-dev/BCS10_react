import React, { useEffect, useState } from "react";

const DemoScroll = () => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log("Tôi là useEffect");
    const onScroll = (event) => {
      console.log(window.pageYOffset);
      console.log("Tôi đang được scroll");
      if (window.pageYOffset > 400) {
        console.log("Tôi thấy bạn đang scroll");
        setCheck(true);
      } else {
        setCheck(false);
      }
      // kiểm tra để thay đổi background màu của nền
    };
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div style={{ height: "5000px", backgroundColor: check ? "red" : "black" }}>
      DemoScroll
    </div>
  );
};

export default DemoScroll;
