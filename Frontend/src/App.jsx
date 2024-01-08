// App.jsx
import "./App.css";
import About from "./components/About";
import Advancing from "./components/Advancing";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Outreach from "./components/outreach";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Outreach />
      <Advancing />
    </>
  );
}
