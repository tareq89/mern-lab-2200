import React, { useState } from "react";
import { Input } from "./Input";
import { ObjectiveInput } from "./ObjectiveInput";
import { Select } from "./Select";

export const Form = ({ formData, onChangeInput, onSubmittttttt, reset }) => {
  return (
    <form onSubmit={onSubmittttttt}>
      <Input label="Name" name="name" type="text" value={formData.name} onChangeInput={onChangeInput} />
      <ObjectiveInput
        label="Gender"
        name="gender"
        type="radio"
        value={formData.gender}
        onChangeInput={onChangeInput}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
      />

      <Select
        label="Nationality"
        name="nationality"
        value={formData.nationality}
        onChangeInput={onChangeInput}
        options={[
          { label: "Bangladeshi", value: "Bangladesh" },
          { label: "Indian", value: "India" },
          { label: "USA", value: "Russia" },
          { label: "UK", value: "UK" },
        ]}
      />

      <ObjectiveInput
        label="Degree"
        name="degree"
        type="checkbox"
        value={formData.degree}
        onChangeInput={onChangeInput}
        options={[
          { label: "SSC", value: "SSC" },
          { label: "HSC", value: "HSC" },
          { label: "BSc", value: "BSc" },
          { label: "MS", value: "MS" },
        ]}
      />

      <div>
        <label htmlFor="name">Address</label>
        <textarea name="address" id="address" value={formData.address} onChange={onChangeInput} />
      </div>

      <div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};
