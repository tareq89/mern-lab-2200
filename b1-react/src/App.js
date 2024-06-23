import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
