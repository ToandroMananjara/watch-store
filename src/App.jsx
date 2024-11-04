import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopUp from "./components/PopUp";

function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const handlePopUp = () => {
    setOrderPopUp(!orderPopUp);
  };
  return (
    <div className="relative overflow-x-hidden dark:bg-gray-900 dark:text-white">
      <Navbar handleOrderPopup={handlePopUp} />
      <Hero orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} />
      <PopUp orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} />
    </div>
  );
}

export default App;
