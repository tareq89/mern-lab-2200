import React, { useState, useEffect } from "react";
import { getPersons } from "../api";
import { Loader } from "./Loader";

export const Table = ({ data, isLoading }) => {
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
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.gender}</td>
            <td>{row.nationality}</td>
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
