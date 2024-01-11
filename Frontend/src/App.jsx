// App.jsx
import "./App.css";
// import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Routers from "./Routers/Routers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Router>
        {/* <LandingPage /> */}
        <Navbar />
        <Routers />
        <Footer />
      </Router>
    </>
  );
}
