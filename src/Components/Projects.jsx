import { PROJECTS } from "../constant/constant";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="my-16 text-center font-semibold text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{  margin: "-100px" }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="mb-6  rounded-md translate-y-2 scale-100 transition-all duration-300 hover:scale-105 opacity-75 hover:opacity-95"
              />
            </div>
            <div className="w-full ml-4 max-w-xl lg:w-3/4">
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1,  ease: "easeOut" }}
                viewport={{  margin: "-50px" }}
                className="mb-2 font-semibold text-2xl"
              >
                {project.title}
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{  margin: "-50px" }}
                className="mb-4 text-stone-400"
              >
                {project.description}
              </motion.p>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.75, delay: index * 0.25, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-4 flex flex-wrap"
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                    key={idx}
                    className="mr-2 rounded mb-4 bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              {project.links && project.links.length === 2 && (
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.75, delay: index * 0.3, ease: "easeOut" }}
                  className="flex"
                >
                  <a href={project.links[0]} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="rounded-md mb-4 p-2 text-sm bg-stone-300 mr-2 text-stone-900 font-semibold w-20 h-9 hover:bg-stone-200"
                    >
                      Live
                    </motion.button>
                  </a>
                  <a href={project.links[1]} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="rounded-md mb-4 bg-stone-300 p-2 text-sm font-semibold text-stone-900 h-9 hover:bg-stone-200"
                    >
                      Source Code
                    </motion.button>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
