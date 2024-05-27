import React, { useEffect, useState } from "react";
import { SearchForm } from "./SearchForm";
import { Table } from "./Table";
import { Loader } from "./Loader";

const mockApi = () => {
  const data = [
    {
      id: "23454234534543342342114543",
      firstName: "Tareq",
      lastName: "Aziz",
      gender: "Male",
    },
    {
      id: "23454234rergerg5345432114543",
      firstName: "Asheq",
      lastName: "Seum",
      gender: "Male",
    },
    {
      id: "2345423453454ghjghjg32114543",
      firstName: "Shabnam",
      lastName: "Mushtari",
      gender: "Female",
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3 * 1000);
  });
};
export const Main = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const resultPromise = mockApi();
    resultPromise
      .then((response) => {
        setdata(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onDelete = (id) => {
    setdata(
      data.filter((x) => {
        return x.id !== id;
      })
    );
  };

  if (isLoading) return <Loader />;

  return (
    <div id="main">
      <SearchForm />
      <Table data={data} onDelete={onDelete} />
    </div>
  );
};
