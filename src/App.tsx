import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Work from "./Components/Work";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
import { Link, NavLink, Outlet } from "react-router-dom";
import { Switch } from "./Components/ui/switch";
import { useState, useEffect } from "react";

const activeClass = "underline";

 const Layout = () => {
  const [isDark, setIsDark] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDark ? "bg-white text-black" : "bg-[#272930] text-white"
      }`}
    >
      
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundColor: isDark ? "#ffffff" : "#272930",
          color: isDark ? "#000000" : "#ffffff",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-40 text-lg sm:text-xl lg:text-2xl gap-4">
          <Link to="/home" className="hover:underline font-semibold">
            leanwithkumar
          </Link>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-4">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              About
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Work
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Contact
            </NavLink>
            <Switch checked={isDark} onCheckedChange={setIsDark} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[100px] px-4 sm:px-10 md:px-20 lg:px-80 flex-grow">
        <Outlet />
      </main>

      {/* Divider */}
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-80">
        <hr className="border-t border-white/50" />
      </div>

      {/* Footer */}
      <footer className="py-5 px-4 sm:px-10 md:px-20 lg:px-40 text-center sm:text-left text-base sm:text-lg md:text-xl flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div>© leanwithkumar 2025</div>
        <div>made with ❤️‍🔥 by lwk</div>
      </footer>
    </div>
  );
};

