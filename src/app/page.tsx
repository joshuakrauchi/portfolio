"use client"

import { useState } from 'react';
import '../styling/cat.scss';
import "animate.css"
import MenuButton from "../components/MenuButton";
import Home from "../components/Home";
import Portfolio from '../components/Portfolio';
import Resume from "../components/Resume";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [currentPage, setCurrentPage] = useState("home");

  let onMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ "--animate-duration": 800 + "ms" }} className="text-white" onMouseMove={onMouseMove}>
      <div className="bg-black h-fit flex flex-grow flex-col min-h-screen">
        <nav className="flex justify-end">
          <MenuButton buttonText={"Home"} address={"#"} onClick={() => setCurrentPage("home")} isActive={currentPage == "home"} />
          <MenuButton buttonText={"Portfolio"} address={"#"} onClick={() => setCurrentPage("portfolio")} isActive={currentPage == "portfolio"} />
          <MenuButton buttonText={"Résumé"} address={"#"} onClick={() => { setCurrentPage("resume") }} isActive={currentPage == "resume"} />
        </nav>
        <div className="px-8 lg:px-32">
          {(currentPage === "home") && <Home mousePosition={mousePosition} />}
          {(currentPage === "portfolio") && <Portfolio />}
          {(currentPage === "resume") && <Resume />}
        </div>
      </div>
    </div>
  );
};

export default Index;
