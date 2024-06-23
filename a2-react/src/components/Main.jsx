import React, { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import { Table } from "./Table";
import { getPerons, deletePerson } from "../api";
import { Modal } from "./Modal";

export const Main = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "Male",
    nationality: "",
    degree: [],
  });

  const loadData = () => {
    setIsLoading(true);
    getPerons(formData)
      .then((response) => {
        setData(response);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSubmitttt = (e) => {
    e.preventDefault();
    console.log(formData);
    loadData();
  };

  const onChangeeee = (e) => {
    let checkBoxValues = formData.degree;
    const generateCheckboxValue = ({ checked, value }) => {
      if (checked) {
        checkBoxValues = [...checkBoxValues, value];
      } else {
        checkBoxValues = checkBoxValues.filter((x) => x !== value);
      }
      return checkBoxValues;
    };
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "checkbox" ? generateCheckboxValue(e.target) : e.target.value,
    });
  };

  const onDelete = (id) => {
    deletePerson(id).then((response) => {
      if (response.isDeleted) loadData();
    });
  };

  return (
    <div id="main">
      <Form
        formData={formData}
        onChangeeee={onChangeeee}
        onSubmitttt={onSubmitttt}
        reset={() => {
          setFormData({
            name: "",
            gender: "",
            nationality: "",
            degree: [],
          });
        }}
      />

      <Table data={data} onDelete={onDelete} isLoading={isLoading} />
    </div>
  );
};
