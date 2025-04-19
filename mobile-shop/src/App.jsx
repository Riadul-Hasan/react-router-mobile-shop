import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl">Hello there</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
