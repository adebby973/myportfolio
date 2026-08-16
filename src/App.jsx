import { useState } from "react";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

export default function App() {
  return (
    <section
      className=" w-full mx-auto align-middle gap-7  p-5 flex  flex-col  items-center justify-center  bg-neutral-100
    "
    >
      <header className="w-9/12 relative flex justify-between   p-3 rounded-2xl  bg-white m-3">
        <h2 className="flex text-blue-700 font-bold text-3xl  ">
          DEV <span className="text-black">tomi</span>
        </h2>
        <input type="checkbox" name="" id="toggle" className="peer hidden" />
        <label
          htmlFor="toggle"
          className="lg:hidden p-2 text-2xl cursor-pointer select-none leading-none"
        >
          ☰
        </label>
        <ul className=" hidden lg:flex items-center gap-6 peer-checked:flex peer-checked:flex-col peer-checked:gap-3 peer-checked:absolute peer-checked:top-[calc(100%+8px)] peer-checked:left-0 peer-checked:w-full peer-checked:bg-white peer-checked:shadow-lg peer-checked:rounded-2xl peer-checked:border peer-checked:border-gray-100 peer-checked:p-5 peer-checked:text-black z-40">
          <li className="font-bold hover:text-blue-700">Home</li>
          <li className="font-bold hover:text-blue-700">About</li>
          <li className="font-bold hover:text-blue-700">Projects</li>
          <li className="font-bold hover:text-blue-700">Contact</li>

          <li className="hidden"></li>
        </ul>
      </header>
      <div>
        <Home />
        <About />
        <Projects />
        <Contact/>
      </div>
    </section>
  );
}
