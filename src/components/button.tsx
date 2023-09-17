"use client";
import React from "react";

const Button = () => {
  const clientFunc = () => {
    alert("hello");
  };

  return <button onClick={clientFunc}>increase</button>;
};

export default Button;
