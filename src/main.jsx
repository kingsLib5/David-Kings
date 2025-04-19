import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { useThemeStore } from './components/Navbar/ThemeStore';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero'
import Expertise from "./components/Expertise/Expertise";
import About from "./components/About/About";
import Projects from './components/Project/Projects'
import "./index.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About1 from "./components/About/About1";

// Create a wrapper component to handle theme
function ThemeWrapper() {
  const { theme } = useThemeStore();
  
  return (
    <div className={theme}>
      <Navbar />
      <Hero />
      <About1/>
      <About/>
      <Expertise/>
      <Projects/>
      <Contact/>
      <Footer/>


      {/* Add other components here later */}
    </div>
  );
}

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeWrapper />
  </StrictMode>
);