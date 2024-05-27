import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Table } from "./Table";
import { getPersons } from "../api";

export const Main = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getPersons()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        // setError(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitttttttt = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getPersons(formData)
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="main">
      <Form formData={formData} onChange={onChange} onSubmitttttttt={onSubmitttttttt} />
      <Table data={data} isLoading={isLoading} />
    </div>
  );
};
