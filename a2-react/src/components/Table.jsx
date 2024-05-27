import React, { useState } from "react";

export const Table = ({ data, onDelete }) => {
  const [name, setName] = useState("Tareq");

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x, i) => {
          return (
            <tr key={i}>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{x.gender}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => onDelete(x.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
