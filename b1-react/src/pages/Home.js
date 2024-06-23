import React from "react";
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";

export const Home = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Main />
    </>
  );
};
