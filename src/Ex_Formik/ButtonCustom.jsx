import React from "react";

const ButtonCustom = ({ className, content, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-5 rounded border-none text-white ${className}`}
    >
      {content}
    </button>
  );
};

export default ButtonCustom;
