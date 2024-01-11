import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import About from "../components/About";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/features" element={<Features />} />
      <Route path="/outreach" element={<Outreach />} />
      <Route path="/advancing" element={<Advancing />} /> */}
    </Routes>
  );
}
