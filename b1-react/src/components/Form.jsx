import React from "react";

export const Form = ({ onSubmitttttttt, formData, onChange }) => {
  return (
    <form onSubmit={onSubmitttttttt}>
      <input type="text" name="name" value={formData.name} onChange={onChange} />
      <input type="number" min={0} max={100} name="age" value={formData.age} onChange={onChange} />
      <select name="gender" value={formData.gender} onChange={onChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="text" name="nationality" value={formData.nationality} onChange={onChange} />
      <input type="submit" value="Search" />
      <button type="button">Cancel</button>
    </form>
  );
};
