import React from "react";
import { Loader } from "../Loader";

export const Table = ({ data, isLoading, remove }) => {
  if (isLoading) return <Loader />;
  return (
    <>
      {data && <h2>Total persons found {data.length}</h2>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Degree</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.gender}</td>
              <td>{data.nationality}</td>
              <td>{data.degree.toString()}</td>
              <td>{data.address}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => remove(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
