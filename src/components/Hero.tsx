import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroTexts = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.to(heroTexts.current, {
      y: 0,
      rotate: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="relative w-[100vw] min-h-[80vh] vsm:min-h-[88vh] px-[20px] vsm:px-[40px] xmd:px-[60px] pt-[60px] vsm:pt-[40px] xmd:pt-[100px] pb-[30px] flex justify-between">
      <p className="absolute xl:static self-end text-[3rem] leading-[1.3]">
        My
        <br />
        Portfolio
        <br />
        Showcase
      </p>

      <div className="w-full xl:w-fit text-right flex flex-col md:justify-between">
        <h1 className="overflow-hidden">
          <span
            ref={(el) => heroTexts.current.push(el as HTMLSpanElement)}
            className="inline-block translate-y-[100%] origin-left rotate-[30deg] font-braah text-[4.89rem] vsm:text-[6.5rem] sm:text-[9rem] lg:text-[12rem] leading-none text-right"
          >
            Hello,
          </span>
        </h1>
        <h1 className="overflow-hidden">
          <span
            ref={(el) => heroTexts.current.push(el as HTMLSpanElement)}
            className="inline-block translate-y-[100%] origin-left rotate-[30deg] font-braah text-[4.89rem] vsm:text-[6.5rem] sm:text-[9rem] lg:text-[12rem] leading-none text-right"
          >
            I'm Basit
          </span>
        </h1>

        <a
          className="hidden xmd:block text-[1.5rem]"
          href="mailto:Hassanbasitope@gmail.com"
        >
          Hassanbasitope@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Hero;
