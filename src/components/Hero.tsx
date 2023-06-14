import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const text1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      text1Ref.current,
      { skewY: 10, y: 100, stagger: { amount: 0.4 } },
      { skewY: 0, y: 0, duration: 1.5 }
    );
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

      <div className="w-full xl:w-fit text-right flex flex-col justify-between">
        <h1
          // ref={text1Ref}
          className="font-braah text-[4.89rem] vsm:text-[6.5rem] sm:text-[9rem] lg:text-[12rem] leading-none text-right"
        >
          Hello,
          <br />
          I'm Basit
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
