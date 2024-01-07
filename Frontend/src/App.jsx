// App.jsx
import "./App.css";
import About from "./components/About";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Feature />
    </>
  );
}
