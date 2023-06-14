import React from "react";
import { FaBars } from "react-icons/fa";

type NavbarPropType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: NavbarPropType) => {
  return (
    <nav className="z-[3] w-full h-[12vh] px-[60px] py-[20px] flex justify-between items-center">
      <h1 className="text-[2rem]">Basit</h1>
      <ul
        className={`${
          isOpen ? "" : "hidden"
        } z-[10] fixed top-0 left-0 w-full h-full bg-[#050000] md:bg-none md:static flex flex-col md:flex-row gap-[30px] justify-center md:justify-start items-center`}
      >
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
        <li>Github</li>
      </ul>
      <FaBars
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden text-[30px] z-[20]"
      />
    </nav>
  );
};

export default Navbar;
