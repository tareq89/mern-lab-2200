import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import { deletePerson, getPersons } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const onChangeInput = (e) => {
    let checkboxValue = [];
    const extractCheckboxValue = ({ value, checked }) => {
      if (checked && checkboxValue.includes(value)) {
        checkboxValue = checkboxValue.filter((x) => x !== value);
      } else checkboxValue.push(value);
      return checkboxValue;
    };
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === "checkbox" ? extractCheckboxValue(e.target) : e.target.value,
    });
  };

  const onSubmittttttt = (e) => {
    e.preventDefault();
    console.log(formData);
    loadData();
  };

  const loadData = () => {
    setIsLoading(true);
    getPersons(formData)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removePerson = (id) => {
    deletePerson(id).then((response) => {
      if (response.isDeleted) loadData();
    });
  };
  return (
    <div>
      <h1>Search form</h1>
      <Form
        formData={formData}
        onChangeInput={onChangeInput}
        onSubmittttttt={onSubmittttttt}
        reset={() => {
          setFormData({});
          loadData();
        }}
      />

      <h1>Persons Table</h1>

      <Table data={data} isLoading={isLoading} remove={removePerson} />
    </div>
  );
}

export default App;
