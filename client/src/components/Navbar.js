import { BsPerson } from "react-icons/bs";
import { RiMenu5Line } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex main-color gap-6 text-white text-xl font-bold px-5 py-4">
      <BsBank2 className="self-center" size={50} />
      <div className="flex items-center ml-auto gap-6">
        <button className="px-5 py-3 rounded-xl border">Open account</button>
        <BsPerson size={30} />
        <RiMenu5Line size={30} onClick={() => setIsMenuOpen(true)} />
        <div
          className={`fixed inset-0 h-screen w-full main-color flex flex-col top-[0%] items-center justify-between h-full z-10 transition-transform duration-500 
            ${isMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <IoMdClose
            onClick={() => setIsMenuOpen(false)}
            size={40}
            className="self-end"
          />
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
