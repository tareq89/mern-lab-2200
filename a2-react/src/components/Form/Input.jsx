import React from "react";

export const Input = ({ name, label, type, value, onChangeeee }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} value={value} onChange={onChangeeee} />
    </div>
  );
};
