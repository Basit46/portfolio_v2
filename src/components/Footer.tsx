import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-[100px] vsm:mt-[200px] px-[20px] vsm:px-[40px] xmd:px-[60px] pb-[50px] w-full min-h-[50vh] flex flex-col justify-between"
    >
      <div>
        <h1 className="font-braah text-[4rem] leading-none">lets Connect 🤝</h1>
        <a
          className="text-[1rem] vsm:text-[1.5rem] underline underline-offset-[10px]"
          href="mailto:Hassanbasitope@gmail.com"
        >
          Hassanbasitope@gmail.com
        </a>
      </div>

      <div className="mt-[50px] vsm:mt-[100px] xmd:mt-0 vsm:flex justify-between">
        <p className="text-[1.6rem] mb-[20px] vsm:mb-0">
          Basit
          <span className="text-[red] text-[0.9rem]">
            .css.tsx.jsx.idan.dev
          </span>
        </p>
        <div className="flex gap-[20px]">
          <a href="https://github.com/Basit46" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-basit-677a3921a/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Basit0282" target="blank">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
