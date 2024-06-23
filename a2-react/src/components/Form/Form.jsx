import React, { useState } from "react";
import { Input } from "./Input";
import { ObjectiveInput } from "./ObjectiveInput";
import { Select } from "./Select";

export const Form = ({ onSubmitttt, formData, onChangeeee, reset }) => {
  return (
    <form onSubmit={onSubmitttt}>
      <Input label="Name" name="name" type="text" value={formData.name} onChangeeee={onChangeeee} />
      <br />
      <ObjectiveInput
        label="Gender"
        name="gender"
        type="radio"
        value={formData.gender}
        onChangeeee={onChangeeee}
        options={[
          { label: "Female", value: "Female" },
          { label: "Male", value: "Male" },
        ]}
      />
      <br />
      <Select
        label="Nationality"
        name="nationality"
        value={formData.nationality}
        onChangeeee={onChangeeee}
        options={[
          { label: "Afghanistan", value: "Afghanistan" },
          { label: "Albania", value: "Albania" },
          { label: "Argentina", value: "Argentina" },
          { label: "Azerbaijan", value: "Azerbaijan" },
          { label: "Belarus", value: "Belarus" },
          { label: "Bosnia", value: "Bosnia nd Herzegovina" },
          { label: "Brazil", value: "Brazil" },
          { label: "Canada", value: "Canada" },
          { label: "China", value: "China" },
          { label: "Costa R", value: "Costarica" },
          { label: "Cuba", value: "Cuba" },
          { label: "Czech R", value: "Czech epublic" },
          { label: "Denmark", value: "Denmark" },
          { label: "France", value: "France" },
          { label: "Georgia", value: "Georgia" },
          { label: "Germany", value: "Germany" },
          { label: "Haiti", value: "Haiti" },
          { label: "Honduras", value: "Honduras" },
          { label: "Hungary", value: "Hungary" },
          { label: "Indonesia", value: "Indonesia" },
          { label: "Iran", value: "Iran" },
          { label: "Ireland", value: "Ireland" },
          { label: "Japan", value: "Japan" },
          { label: "Kazakhstan", value: "Kazakhstan" },
          { label: "Kuwait", value: "Kuwait" },
          { label: "Kyrgyzstan", value: "Kyrgyzstan" },
          { label: "Luxembourg", value: "Luxembourg" },
          { label: "Madagascar", value: "Madagascar" },
          { label: "Malaysia", value: "Malaysia" },
          { label: "Mayotte", value: "Mayotte" },
          { label: "Mexico", value: "Mexico" },
          { label: "Micronesia", value: "Micronesia" },
          { label: "Mongolia", value: "Mongolia" },
        ]}
      />
      <br />

      <ObjectiveInput
        label="Degree"
        name={"degree"}
        type={"checkbox"}
        value={formData.degree}
        onChangeeee={onChangeeee}
        options={[
          { label: "SSC", value: "SSC" },
          { label: "HSC", value: "HSC" },
          { label: "BSc", value: "BSc" },
          { label: "MS", value: "MS" },
        ]}
      />

      <button type="submit">Search</button>
      <button type="reset" onClick={reset}>
        Reset
      </button>
    </form>
  );
};
