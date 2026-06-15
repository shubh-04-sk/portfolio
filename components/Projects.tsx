"use client";

import Image from "next/image";
// import { Github, ExternalLink } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaSleigh } from "react-icons/fa";

const projects = [
  {
    title: "Echo - AI SaaS Support Platform",

    description:
      "AI Chat Assistant, Voice Support via Vapi, Knowledge Base with RAG, Multi-Tenant Architecture, Script-Based Widget Integration, Real-Time Communication",

    image: "/echo.avif",

    tech: ["Next.js", "Convex", "AWS", "Vapi", "Clerk", "RAG"],

    github: "",

    demo: "https://echo-web-one-eta.vercel.app/",

    private: true,
  },

  {
    title: "Real-Time Chat Application",

    description:
      "A full-stack real-time messaging platform with authentication, profile management, online users and theme customization.",

    image: "/gup-shup.png",

    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],

    github: "https://github.com/shubh-04-sk/mern-chat-app",

    demo: "#",
  },

  {
    title: "FleetFlow",

    description:
      "Role-based fleet management platform for managing vehicles, drivers, trips and expenses with PostgreSQL and Prisma.",

    image: "/fleetflow.png",

    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],

    github: "https://github.com/shubh-04-sk/Fleet-Flow",

    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300  hover:border-sky-500"
            >
              <div className="h-56 bg-slate-800 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="max-h-52 w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-slate-400 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-800 px-3 py-1 rounded text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {!project.private ? (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg"
                    >
                      {/* <Github size={18} /> */}
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  ) : (
                    <span className="bg-slate-800 px-4 py-2 rounded-lg">
                      Private Project
                    </span>
                  )}

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-sky-500 px-4 py-2 rounded-lg"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
