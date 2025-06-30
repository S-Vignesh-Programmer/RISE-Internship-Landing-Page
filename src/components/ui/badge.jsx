import React from "react";

const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium";

  const variants = {
    default: "bg-blue-100 text-blue-700",
    popular: "bg-blue-600 text-white",
    success: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
