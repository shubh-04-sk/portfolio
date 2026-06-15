"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sky-400 text-lg mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold">Shubham Kumawat</h1>

          <h2 className="text-2xl md:text-4xl mt-4 text-slate-300">
            Full Stack Developer
          </h2>

          <p className="max-w-2xl mt-6 text-slate-400 text-lg">
            I'm an MCA student and Full Stack Developer from Ahmedabad.
            Currently looking for opportunities as a Frontend Developer, Full
            Stack Developer, or Software Engineer.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-sky-500 px-6 py-3 rounded-lg  hover:-translate-y-2
                hover:border-sky-500 "
            >
              View Projects
            </a>

            <a
              href="/Shubham_cv_.pdf"
              download
              className="border border-slate-700 px-6 py-3 rounded-lg hover:-translate-y-2
                hover:border-sky-500 "
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 mt-8 ">
            <a href="https://github.com/shubh-04-sk" target="_blank">
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-kumawat-9b8809328"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>

            <a href="mailto:shubham004kumawat@gmail.com">
              <Mail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
