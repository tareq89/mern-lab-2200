import React from "react";
import { ProfileComponent } from "./Profile";

export const TopBar = () => {
  return (
    <div id="topbar">
      <button id="toggleSidebar">Toggle</button>
      <img src="./logo.svg" alt="" />
      <ProfileComponent />
    </div>
  );
};
