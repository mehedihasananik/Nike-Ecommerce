import { useSelector } from "react-redux";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
/* eslint-disable react/prop-types */

const Cart = () => {
  const { open } = useSelector((state) => state.cart);

  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full blur-effect-theme opacity-100 
        z-[100]"
        >
          <div className="max-w-xl h-screen blur-effect-theme absolute right-0 w-full  z-[200]">
            <CartCount />
            <CartItem />
            <CartEmpty />
            <Checkout />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
