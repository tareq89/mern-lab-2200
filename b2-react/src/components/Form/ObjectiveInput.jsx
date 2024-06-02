import React from "react";

/*
const options = [
  { label: "Male", value: "male"},
  { label: "Female", value: "female"},
]

*/

export const ObjectiveInput = ({ label, name, options, type, value, onChangeInput }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      {options.map((op, index) => (
        <label htmlFor={op.value} key={index}>
          {op.label}
          <input type={type} name={name} id={op.value} value={op.value} checked={value === op.value} onChange={onChangeInput} />
        </label>
      ))}
    </div>
  );
};
