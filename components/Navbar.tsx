"use client";

import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="container-custom flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold text-sky-400">SK</h1>

        <div className="hidden md:flex gap-8">
          <Link
            href="#about"
            className="text-slate-300 transition-all duration-300 hover:text-sky-400 hover:[text-shadow:0_0_10px_rgb(56,189,248),0_0_20px_rgb(56,189,248)]"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-slate-300 transition-all duration-300 hover:text-sky-400 hover:[text-shadow:0_0_10px_rgb(56,189,248),0_0_20px_rgb(56,189,248)]"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-slate-300 transition-all duration-300 hover:text-sky-400 hover:[text-shadow:0_0_10px_rgb(56,189,248),0_0_20px_rgb(56,189,248)]"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 transition-all duration-300 hover:text-sky-400 hover:[text-shadow:0_0_10px_rgb(56,189,248),0_0_20px_rgb(56,189,248)]"
          >
            Contact
          </Link>
        </div>

        <a
          href="/Shubham_cv_.pdf"
          download
          className=" flex items-center gap-2 bg-sky-500  px-4 py-2 rounded-lg hover:bg-sky-600 ransition font-medium "
        >
          Resume
          <ArrowDownToLine size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
