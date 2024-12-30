import logo from "../assets/RC-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between lg:mt-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-14" src={logo} alt="logo" />
      </div>
      <div className="my-4 flex items-center justify-center gap-4 text-2xl lg:mx-8">
        <a
          href="https://www.linkedin.com/in/romcharit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/KRyderTR" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://www.instagram.com/rom.charit" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
