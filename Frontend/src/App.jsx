// App.jsx
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Routers from "./Routers/Routers";

export default function App() {
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
}
