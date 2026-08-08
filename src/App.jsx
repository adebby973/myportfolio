import { useState } from "react";
import Begin from "./components/begin.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen w-full bg-linear-to-r from-white to-purple-700 m-0 p-1 flex items-center justify-center">
      {/* 1. FIXED: Added flex column layout and min height matching to handle inner components */}
      <section className="w-full md:w-10/12 min-h-[80vh] mx-auto my-10 md:my-20 bg-white p-4 md:p-6 rounded-xl shadow-lg flex flex-col">
        <Router>
          {/* Navigation wrapper block */}
          <div className="w-full flex justify-between items-center mx-auto relative py-2 flex-none">
            <div className="font-bold text-xl text-purple-900">Devtomi</div>

            {/* Hamburger Menu Icon for Mobile screens */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-purple-900 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              ⁞⁞
            </button>

            {/* Dynamic Link Menu container */}
            <div
              className={`absolute top-full left-0 w-full bg-white md:bg-transparent p-5 md:p-0 flex flex-col md:flex-row gap-6 md:gap-20 rounded-lg shadow-md md:shadow-none transition-all duration-300 z-50 ${
                isOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible md:opacity-100 md:visible md:static md:w-auto md:flex"
              }`}
            >
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 font-medium transition-colors"
              >
                home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 font-medium transition-colors"
              >
                about
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-700 font-medium transition-colors"
              >
                projects
              </Link>
            </div>
          </div>

          {/* 2. FIXED: Turned content box into an auto-expanding flex container */}
          <div className="mt-8 flex-1 flex flex-col justify-center items-center">
            <Routes>
              <Route path="/" element={<Begin />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </section>
    </section>
  );
}
