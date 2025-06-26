import { useState } from "react";
import Links from "../Links/Links";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import volteLogo from '../Images/volteLogo.png';
import volteName from '../Images/volteName.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "https://www.facebook.com/", name: <FaFacebookF className="bg-indigo-900 text-white text-2xl rounded-full p-1 my-3 md:mt-1" /> },
    { id: 6, path: "https://www.linkedin.com/", name: <FaLinkedinIn className="bg-indigo-900 text-white text-2xl rounded p-1 md:mt-1" /> },
  ];

  return (
    <nav className="flex text-white bg-indigo-900 justify-between lg:px-10 px-5 sticky top-0 z-50">
      <div>
        <Link to='/' className="md:py-4 flex pt-1">
          {/* <img className="md:h-16 h-12 md:w-28 w-22" src={volteLogo} alt="Volte Logo" /> */}
          <img className="md:h-14 h-12 md:w-28 w-22 md:pt-3 pt-4" src={volteName} alt="Volte Name" />
        </Link>
      </div>
      <div>
        <div
          className="text-2xl md:hidden md:m-0 m-5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          role="button"
        >
          {open ? <IoMdClose /> : <IoIosMenu />}
        </div>
        <ul
          className={`md:flex absolute md:static duration-1000 ${open ? "top-16 right-1 bg-indigo-900" : "-top-60 right-1"} text-white rounded px-5 py-3 text-xl`}
        >
          {routes.map((route) => (
            <Links key={route.id} route={route} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
