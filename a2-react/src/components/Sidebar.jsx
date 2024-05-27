import React from "react";

export const Sidebar = () => {
  return (
    <div id="sidebar">
      <ul>
        <li>
          <a href="/persons">Persons</a>
          <a href="/teachers">Teachers</a>
          <a href="/students">Students</a>
        </li>
      </ul>
    </div>
  );
};
