import Image from "next/image";

const skills = [
  {
    name: "React",
    icon: "/React.svg",
  },
  {
    name: "Next.js",
    icon: "/Next.js.svg",
  },
  {
    name: "Node.js",
    icon: "/Node.js.svg",
  },
  {
    name: "MongoDB",
    icon: "/MongoDB.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/PostgresSQL.svg",
  },
  {
    name: "TypeScript",
    icon: "/TypeScript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/Tailwind CSS.svg",
  },
  {
    name: "GitHub",
    icon: "/GitHub.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">My Tech Stack</h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies I use to build modern, scalable and high-performance
            web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                flex
                flex-col
                items-center hover:border-sky-500
                hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]
                justify-center
                gap-4
                transition-all
                duration-300
                hover:-translate-y-2
               
              "
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={70}
                height={70}
                className={`
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]
                  ${
                    skill.name === "Next.js" || skill.name === "GitHub"
                      ? "invert"
                      : ""
                  }
                `}
              />

              <span className="text-slate-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
