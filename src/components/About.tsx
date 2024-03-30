import sparta from "../assets/logo.png";

const About = () => {
  return (
    <div
      id="about"
      className="about relative mt-[50px] min-h-[100vh] w-full px-[20px] vsm:px-[40px] xmd:px-[60px] pt-[50px]"
    >
      <div className="h-full w-fit absolute opacity-50 lg:opacity-100 right-0 top-[-10px]">
        <img className="sparta object-cover" src={sparta} alt="sparta_Img" />
      </div>

      <h1 className="font-braah text-[4rem] z-[2] relative">Tech Stack</h1>

      <div className="sec1 z-[2] relative">
        <h1>Frontend:</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
          <li>React JS</li>
          <li>Next JS</li>
          <li>Redux Toolkit</li>
          <li>Firebase</li>
          <li>GSAP</li>
        </ul>
      </div>

      <div className="sec2 z-[2] relative">
        <h1>Backend:</h1>
        <ul>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
        </ul>
      </div>

      <div className="sec3 z-[2] relative">
        <h1>Blockchain:</h1>
        <ul>
          <li>Solidity</li>
          <li>HardHat</li>
          <li>Ethers.js</li>
          <li>IPFS</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
