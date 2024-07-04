import { BsPerson } from "react-icons/bs";
import { RiMenu5Line } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex main-color text-white text-xl font-bold px-5 py-4">
      <BsBank2 className="self-center" size={50} />
      <div className="flex items-center ml-auto gap-6">
        <button className="px-5 py-3 rounded-xl border">Open account</button>
        <BsPerson size={30} />
        <RiMenu5Line size={30} />
      </div>
    </div>
  );
};

export default Navbar;
