import React from "react";

const Card = ({ children, className = "", hover = false, ...props }) => {
  const baseClasses = "bg-white rounded-xl shadow-lg border border-gray-100";
  const hoverClasses = hover
    ? "hover:shadow-xl transition-shadow duration-300"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
