import React from "react";

/**
 *  
 const options = [
  { label: "", value: ""},
  { label: "", value: ""},
  { label: "", value: ""},
  { label: "", value: ""},
 ]
 */
export const ObjectiveInput = ({ label, name, type, options, value, onChangeeee }) => {
  return (
    <div>
      <label htmlFor={name}>{label}: </label>
      {options.map((op, index) => {
        return (
          <label key={index}>
            {op.label}
            <input
              type={type}
              name={name}
              value={op.value}
              checked={Array.isArray(value) ? value.includes(op.value) : op.value === value}
              onChange={onChangeeee}
            />
          </label>
        );
      })}
    </div>
  );
};
