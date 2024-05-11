import { useState } from "react";

import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Client from "./Components/Client";

function App() {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#F5F7FA]">
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <HeroSection isMenuOpen={isMenuOpen} />
      </div>
      <br />
      <Client />
    </>
  );
}

export default App;
