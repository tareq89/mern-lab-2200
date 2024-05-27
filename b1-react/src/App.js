import logo from "./logo.svg";
import "./App.css";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

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
