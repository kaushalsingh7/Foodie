import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 h-full bg-white
      ${
        activeCart ? "translate-x-0" : "translate-x-full"
      } trasistion-full duration-500`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gry-600 fornt-bold
          p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="bold text-center">Your cart is empty</h2>
        )}
        <div className="absolute bottom-5">
          <h3 className="font-semibold text-gray-800">Items :{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount :{totalPrice}
          </h3>
          <hr className="w-[95vw] lg:w-[18vw]" />
          <button
            className="bg-green-500 font-bold-300 px-3
           text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() =>
          activeCart ? setActiveCart(false) : setActiveCart(true)
        }
        className={`rounded-full bg-wite shadow-md text-5xl p-3 fixed bottom-9 right-4
        ${totalQty > 0 && "animate-bounce delay-500 transistion-all"}
        
        `}
      />
    </>
  );
};

export default Cart;
