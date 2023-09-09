import { useRef, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProjectPropType = {
  project: {
    id: number;
    img: string;
    title: string;
    desc: string;
    site: string;
    github: string;
  };
};

const Project = ({ project }: ProjectPropType) => {
  const coverRef: any = useRef();
  const imgRef: any = useRef();

  useEffect(() => {
    gsap.to(coverRef.current, {
      width: 0,
      duration: 2,
      scrollTrigger: {
        trigger: coverRef.current,
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        scale: 1.3,
      },
      {
        scale: 1,
        duration: 2,

        scrollTrigger: {
          trigger: coverRef.current,
        },
      }
    );
  }, []);

  return (
    <div className="project w-full h-fit flex flex-col items-start gap-y-[20px]">
      <div className="w-[70vw] h-fit relative border-[2px] border-white rounded-[10px] overflow-hidden">
        <img
          ref={imgRef}
          className="h-full w-full object-fit"
          src={project.img}
          alt="project_img"
        />
        <div
          ref={coverRef}
          className="absolute top-0 right-0 w-[80%] h-full bg-white"
        />
      </div>

      <div className="w-full">
        <h1 className="text-[2rem] xmd:text-[3rem] leading-none font-semibold">
          {project.title}
        </h1>
        <p className="mt-[10px] mb-[20px] w-full xmd:w-[50%] text-[1rem] md:text-[1.2rem]">
          {project.desc}
        </p>
        <div className="flex flex-col vsm:flex-row gap-[10px] vsm:gap-[30px] items-start vsm:items-center">
          <a className="link" href={project.site} target="blank">
            Visit website
            <FiArrowUpRight />
          </a>
          <a className="link" href={project.github} target="blank">
            Visit repo
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
