import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Header = () => {

  const cartItems = useSelector((state)=> state.cart.items)

  console.log("cartItems is :", cartItems)
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

          <li className="hover:text-black cursor-pointer"><Link to="/cart"><button>Cart ({cartItems.length} items)</button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
