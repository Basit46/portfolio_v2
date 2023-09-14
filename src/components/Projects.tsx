import { projectsData } from "../data/projectsData";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full px-[20px] vsm:px-[40px] xmd:px-[60px] min-h-[100vh]"
    >
      <h1 className="text-[4rem] leading-none font-braah">Featured Projects</h1>
      <a
        href="https://github.com/Basit46"
        target="blank"
        className="text-white font-[1.2rem] underline hover:text-blue-600 cursor-outline"
      >
        View All
      </a>

      <div className="mt-[70px] flex flex-col gap-[60px] vsm:gap-[130px]">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
