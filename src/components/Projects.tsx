import { projectsData } from "../data/projectsData";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="w-full mt-[50px] px-[40px] xmd:px-[60px] pt-[40px] min-h-[100vh]">
      <h1 className="text-[4rem] leading-none font-braah">Featured Projects</h1>
      <a
        href="https://github.com/Basit46"
        target="blank"
        className="text-white font-[1.2rem] underline hover:text-blue-600 cursor-outline"
      >
        View All
      </a>

      <div className="mt-[50px] flex flex-col gap-[130px]">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
