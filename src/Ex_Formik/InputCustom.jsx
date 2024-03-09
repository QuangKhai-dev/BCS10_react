import React from "react";

const InputCustom = ({
  id,
  label,
  placeholder,
  className = "",
  name,
  onChange,
  value,
}) => {
  // id, label, placeholder sẽ khác nhau giữa các input
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name={name}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputCustom;
