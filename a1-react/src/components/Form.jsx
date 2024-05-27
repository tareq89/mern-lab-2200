import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <input type="text" name="name" placeholder="name" value={formData.name} onChange={onChange} />
      <input type="text" name="age" placeholder="age" value={formData.age} onChange={onChange} />
      <input type="text" name="gender" placeholder="gender" value={formData.gender} onChange={onChange} />
      <input type="text" name="nationality" placeholder="nationality" value={formData.nationality} onChange={onChange} />
      <input type="submit" />
      <button>Reset</button>
    </form>
  );
};
