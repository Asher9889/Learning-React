import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList"
import { removeAllItems } from "../utils/store/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((state)=> state.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
    function handleEmptycart (){
        dispatch(removeAllItems());
    }
    return (
        <div className="w-1/2 mx-auto flex flex-col items-center  ">
            <div className="flex flex-row justify-center gap-10">
                <h1 className="text-2xl font-bold text-center">Cart Items</h1>
                <button onClick={handleEmptycart} className="bg-red-700 text-white px-2 rounded-md">Remove All Items</button>
            </div>
            <div className="pt-4">
            {cartItems.length === 0 ? <h1 className="font-semibold text-2xl">cart is Empty</h1> : cartItems.map((item)=> <ItemsList item={item} />)}
            </div>
        </div>
    )
} 

export default Cart;