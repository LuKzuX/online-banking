import { BsPerson } from "react-icons/bs";
import { RiMenu5Line } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen == false) {
      document.body.style.overflow = "hidden";
      isMenuOpen(true);
    } else {
      isMenuOpen(false);
      document.body.style.overflow = "auto";
    }
    if (isUserMenuOpen == false) {
      document.body.style.overflow = "hidden";
      setIsUserMenuOpen(true);
    } else {
      setIsUserMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="flex main-color text-white text-xl font-bold px-5 py-4">
      <BsBank2 className="self-center" size={50} />
      <div className="flex items-center ml-auto gap-3">
        <button className="px-5 py-3 rounded-xl border">Open account</button>
        <BsPerson onClick={toggleMenu} size={30} className="" />
        <div
          className={`fixed inset-0 h-screen w-full main-color flex flex-col top-[0%] items-center justify-between h-full z-10 transition-transform duration-500 
            ${isUserMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <IoMdClose onClick={toggleMenu} size={40} className="self-end" />
          <p>apiyot08g7</p>
          <p>apiyot08g7</p>
        </div>
        <RiMenu5Line size={30} onClick={toggleMenu} />
        <div
          className={`fixed inset-0 h-screen w-full main-color flex flex-col top-[0%] items-center justify-between h-full z-10 transition-transform duration-500 
            ${isMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <IoMdClose onClick={toggleMenu} size={40} className="self-end" />
          <p>Why choose Us</p>
          <p>Services</p>
          <p>Where we Work</p>
          <p>Socials</p>
          <p className="mb-32">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
