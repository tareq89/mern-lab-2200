import React from "react";

export const Input = ({ name, type, label, value, onChangeInput }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={label} value={value} onChange={onChangeInput} />
    </div>
  );
};
