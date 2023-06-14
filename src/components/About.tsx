import sparta from "../assets/logo.png";
import spartaFight from "../assets/spartans-fight.gif";

const About = () => {
  return (
    <div
      id="about"
      className="about mt-[50px] min-h-[100vh] w-full relative px-[20px] vsm:px-[40px] xmd:px-[60px] pt-[50px]"
    >
      <div className="absolute opacity-50 lg:opacity-100 right-0 top-[-10px] z-[-1] h-full w-fit overflow-hidden">
        <img className="sparta object-cover" src={sparta} alt="sparta_Img" />
      </div>

      <h1 className="font-braah text-[4rem]">About Me</h1>
      <p className="text-[1.8rem] w-full xl:w-[50%] ">
        I'm a Frontend developer with 2 years of experience with frontend tools.
        Like a fearless Spartan warrior{" "}
        <span className="h-fit w-fit">
          <img
            className="inline h-[1.8rem] w-[55px] rounded-[20px]"
            src={spartaFight}
            alt="spartafight"
          />
        </span>{" "}
        of the digital realm, I forge flawless user experiences, battling
        through the front lines of code to conquer the hearts of users.
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>Basic Solidity</li>
      </ul>
      <ul className="">
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
