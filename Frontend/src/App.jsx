// App.jsx
import "./App.css";
import About from "./components/About";
import Advancing from "./components/Advancing";
import Background from "./components/Background";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OurFamily from "./components/Our-Family";
import Outreach from "./components/outreach";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Outreach />
      <Background />
      <Advancing />
      <OurFamily />
    </>
  );
}
