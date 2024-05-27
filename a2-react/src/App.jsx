import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TopBar } from "./components/TopBar";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import React from "react";

function App() {
  return (
    <Fragment>
      <TopBar />
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;
