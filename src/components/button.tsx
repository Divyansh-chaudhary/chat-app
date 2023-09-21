import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={`bg-sky-900 py-3 px-16 rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
