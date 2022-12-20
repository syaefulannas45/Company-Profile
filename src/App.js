import Navbar from "./components/Navbar";
import AOS from "aos";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      <Hero/>
      <Brands/>
      <Services/>
    </>
  );
}

export default App;
