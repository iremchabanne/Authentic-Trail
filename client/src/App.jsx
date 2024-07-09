import authenticLogo from "/authentic-outdoor-logo.png";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <img src={authenticLogo} className="logo" alt="Authentic logo" />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
