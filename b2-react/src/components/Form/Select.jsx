import React from "react";

export const Select = ({ label, name, options, value, onChangeInput }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChangeInput}>
        {options.map((op, index) => (
          <option key={index} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};
