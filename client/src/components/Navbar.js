import { BsPerson } from "react-icons/bs";
import { RiMenu5Line } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { token, setToken } = useAuthContext();

  const toggleMenu1 = () => {
    if (isMenuOpen == false) {
      document.body.style.overflow = "hidden";
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const toggleMenu2 = () => {
    if (isUserMenuOpen == false) {
      document.body.style.overflow = "hidden";
      setIsUserMenuOpen(true);
    } else {
      setIsUserMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="w-full z-30 flex main-color text-white text-4xl font-bold px-5 py-4 lg:justify-center">
      <div className="flex w-full lg:max-w-[1024px]">
      <BsBank2 className="self-start" size={50} />
      <div className="flex justify-center items-center ml-auto gap-8 font-semibold">
        {!token && <BsPerson onClick={toggleMenu2} size={30} className="" />}
        <div
          className={`fixed inset-0 h-screen w-full main-color flex flex-col top-[0%] items-center justify-evenly z-10 transition-transform duration-500 
            ${isUserMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <IoMdClose onClick={toggleMenu2} size={40} className="self-end" />
          <div className="flex flex-col h-screen items-center justify-evenly">
            <p
              className=" cursor-pointer"
              onClick={() => {
                toggleMenu2();
                navigate("/signin");
              }}
            >
              Login
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                toggleMenu2();
                navigate("/signup");
              }}
            >
              Signup
            </p>
          </div>
        </div>
        <RiMenu5Line
          className="block lg:hidden"
          size={30}
          onClick={toggleMenu1}
        />
        {!token && (
          <div className="hidden lg:flex gap-24 text-2xl">
            <p>Services</p>
            <p>Where we Work</p>
            <p>Socials</p>
            <p className="">Contact Us</p>
          </div>
        )}
         {token && (
          <div className="hidden lg:flex gap-24 text-2xl">
             <p
             className="cursor-pointer"
                onClick={() => {
                  navigate("/home");

                }}
              >
                Home
              </p>
              <p     className="cursor-pointer"
                onClick={() => {
                  navigate("/transactions");

                }}
              >
                Transactions
              </p>
              <p     className="cursor-pointer"
                onClick={() => {
                  navigate("/contacts");

                }}
              >
                Contacts
              </p>
              <p     className="cursor-pointer" onClick={() => {
                localStorage.removeItem("user")
                setToken("")
                navigate("/")
              }}>Logout</p>
          </div>
        )}
        <div
          className={`fixed inset-0 h-screen w-full main-color flex flex-col top-[0%] items-center z-10 transition-transform duration-500
            ${isMenuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <IoMdClose onClick={toggleMenu1} size={40} className="self-end" />
          {!token && (
            <div className=" flex flex-col h-screen items-center justify-evenly">
              <p className="">Why choose Us</p>
              <p>Services</p>
              <p>Where we Work</p>
              <p>Socials</p>
              <p className="">Contact Us</p>
            </div>
          )}
          {token && (
            <div className="flex flex-col h-screen items-center justify-evenly">
              <p
                onClick={() => {
                  navigate("/home");
                  toggleMenu1();
                }}
              >
                Home
              </p>
              <p
                onClick={() => {
                  navigate("/transactions");
                  toggleMenu1();
                }}
              >
                Transactions
              </p>
              <p
                onClick={() => {
                  navigate("/contacts");
                  toggleMenu1();
                }}
              >
                Contacts
              </p>
              <p onClick={() => {
                localStorage.removeItem("user")
                setToken("")
                navigate("/")
              }}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
