import React from "react";

export const Topbar = () => {
  return (
    <div className="topbar">
      <img src="" alt="" className="logo" />
      <div className="profileMenu">
        <img src="" alt="" className="avatar" />
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <button>Signout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
