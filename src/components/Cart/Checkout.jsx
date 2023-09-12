import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
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

  return (
    <div>
      <div className="h-[75vh] w-full flex justify-center items-end">
        <h3>Subtotal: ${total}</h3>
      </div>
    </div>
  );
};

export default Checkout;
