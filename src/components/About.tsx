import { useEffect, useRef } from "react";
import sparta from "../assets/logo.png";
import { gsap } from "gsap";

const About = () => {
  const aboutTexts = useRef<any>([]);
  const aboutSection = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutTexts.current,
      {
        opacity: 0,
        y: "50%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutSection.current,
          start: "top center",
        },
      }
    );
  }, []);
  return (
    <div
      ref={aboutSection}
      id="about"
      className="about mt-[50px] min-h-[100vh] w-full relative px-[20px] vsm:px-[40px] xmd:px-[60px] pt-[50px]"
    >
      <div className="absolute opacity-50 lg:opacity-100 right-0 top-[-10px] z-[-1] h-full w-fit overflow-hidden">
        <img className="sparta object-cover" src={sparta} alt="sparta_Img" />
      </div>

      <h1
        ref={(el) => aboutTexts.current.push(el)}
        className="font-braah text-[4rem]"
      >
        About Me
      </h1>
      <div className="w-full xl:w-[50%]">
        <p
          ref={(el) => aboutTexts.current.push(el)}
          className="text-[1.8rem] w-fit "
        >
          Transforming Vision into Reality: Elevating User Experiences Through
          Innovative Frontend Development. Let's Collaborate to Create Web
          Solutions that Captivate, Engage, and Inspire.
        </p>
      </div>

      <ul ref={(el) => aboutTexts.current.push(el)}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>Basic Solidity</li>
      </ul>
      <ul ref={(el) => aboutTexts.current.push(el)}>
        <li>Ether JS</li>
        <li>GSAP</li>
        <li>Redux Toolkit</li>
        <li>Firebase</li>
        <li>Sanity</li>
        <li>Git & Github</li>
        <li>Netlify</li>
        <li>Vercel</li>
        <li>Figma</li>
      </ul>
    </div>
  );
};

export default About;
