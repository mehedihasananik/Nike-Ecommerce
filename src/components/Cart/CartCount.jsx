import { AiOutlineDoubleLeft } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, openModel } from "../../redux/cartSlice";

const CartCount = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);
  return (
    <div>
      <div className="bg-white flex justify-between items-center py-2 px-2  ">
        <div className="flex items-center space-x-3">
          <button onClick={() => dispatch(openModel())} className="w-5 h-4">
            <AiOutlineDoubleLeft />
          </button>
          <div className="text-base font-medium">
            Your Cart{" "}
            <span className="bg-black py-1 px-1 text-[12px] text-white rounded-md">
              (0 Items)
            </span>
          </div>
        </div>
        <div className="bg-black text-white p-1 rounded-md">
          <button onClick={() => dispatch(clearCart())}>
            {" "}
            <RxCross2 style={{ fontSize: "18px" }} className="stroke-[.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCount;
