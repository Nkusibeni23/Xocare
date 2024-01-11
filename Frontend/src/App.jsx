// App.jsx
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Routers from "./Routers/Routers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <Router>
      <>
        <LandingPage />
        <Navbar />
        <Routers />
        <Footer />
      </>
    </Router>
  );
}
