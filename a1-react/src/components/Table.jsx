import React from "react";
import { Loader } from "./loader/Loader";

export const Table = ({ data, isLoading, remove, onEdit }) => {
  if (isLoading) return <Loader />;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Nationality</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.nationality}</td>
              <td>
                <button onClick={() => onEdit(row)}>Edit</button>
                <button onClick={() => remove(row._id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
