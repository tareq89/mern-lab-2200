import React from "react";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/persons">Persons</a>
          <a href="/students">Students</a>
          <a href="/teachers">Teachers</a>
        </li>
      </ul>
    </div>
  );
};
