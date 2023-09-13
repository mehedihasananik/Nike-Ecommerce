import { useSelector } from "react-redux";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */

const Cart = () => {
  const { cartItems, open } = useSelector((state) => state.cart);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const amountCalculation = () => {
    let amount = 0;
    cartItems.map((item) => {
      amount = item.quantity + amount;
    });
    setAmount(amount);
  };
  const totalCalculation = () => {
    let total = 0;
    cartItems.map((item) => {
      total = item.quantity * item.price + total;
    });
    setTotal(total);
  };

  useEffect(() => {
    amountCalculation();
    totalCalculation();
  }, [cartItems]);
  console.log(total);

  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full blur-effect-theme opacity-100 
        z-[100]"
        >
          <div className="max-w-xl h-screen blur-effect-theme absolute right-0 w-full  z-[200]">
            <CartCount amount={amount} />
            <CartItem total={total} />
            <CartEmpty />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
