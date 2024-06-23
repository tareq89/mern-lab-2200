import React from "react";
import { Loader } from "./Loader";

export const Table = ({ data, isLoading }) => {
  if (isLoading) return <Loader />;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>
              {row.firstName} {row.lastName}
            </td>
            <td>{row.email}</td>
            <td>{row.dateOfBirth}</td>
            <td>{row.address}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
