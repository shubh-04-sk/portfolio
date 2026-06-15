// import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Mail, Phone } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12">Contact</h2>

        <div
          className="bg-slate-900 p-8 rounded-xl border border-slate-800 
                hover:border-sky-500 hover:-translate-x-2 "
        >
          <div className="space-y-6">
            <a
              href="mailto:shubham004kumawat@gmail.com"
              className="flex items-center gap-3"
            >
              <Mail />
              shubham004kumawat@gmail.com
            </a>

            <a href="tel:+917016233703" className="flex items-center gap-3">
              <Phone />
              +91 7016233703
            </a>

            <a
              href="https://github.com/shubh-04-sk"
              target="_blank"
              className="flex items-center gap-3"
            >
              {/* <Github /> */}
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-kumawat-9b8809328"
              target="_blank"
              className="flex items-center gap-3"
            >
              {/* <Linkedin /> */}
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
