import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  ...props
}) => {
  const baseClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;
