import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
