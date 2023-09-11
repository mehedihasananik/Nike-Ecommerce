import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full blur-effect-theme opacity-100 z-[100]">
      <div className="max-w-xl h-screen blur-effect-theme absolute right-0 w-full">
        <CartCount />
        <CartItem />
        <CartEmpty />
      </div>
    </div>
  );
};

export default Cart;
