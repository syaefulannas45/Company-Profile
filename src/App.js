import Navbar from "./components/Navbar";
import AOS from "aos";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      <Hero/>
      <Brands/>
    </>
  );
}

export default App;
