import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-zinc-200 flex justify-between items-center px-4">
      <div className="w-16">
        <Link to="/"><img className="" src={logo} /></Link>
      </div>
      <div className="mr-10 text-xl text-zinc-600 font-semibold ">
        <ul className="flex gap-10">
          <li className="hover:text-black cursor-pointer"><Link to="/">Home</Link></li>

          <li className="hover:text-black cursor-pointer"><Link  to="/about">About</Link></li>

          <li className="hover:text-black cursor-pointer">Contact Us</li>

          <li className="hover:text-black cursor-pointer"><button>Cart (0 Items)</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
