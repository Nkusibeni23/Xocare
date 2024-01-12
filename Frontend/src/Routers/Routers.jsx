import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import Error from "../components/Error";
import Donate from "../components/Donate";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Donate" element={<Donate />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
