import React from "react";

export const Select = ({ label, name, options, value, onChangeeee }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChangeeee}>
        {options.map((op, index) => (
          <option key={index} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </>
  );
};
