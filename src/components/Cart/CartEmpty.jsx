import { useDispatch, useSelector } from "react-redux";
import bag from "../../assets/emptybag.png";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { openModel } from "../../redux/cartSlice";
const CartEmpty = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length >= 1 ? null : (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="">
            <img
              className="w-40 hover:scale-110 transition-all duration-300 cursor-pointer"
              src={bag}
              alt=""
            />
          </div>
          <div className="mt-5">
            <button
              onClick={() => dispatch(openModel())}
              className="flex items-center gap-x-2 bg-orange-500/80 text-black py-1.5 px-6 
          text-[15px] rounded-md font-medium shadow-lg shadow-orange-400"
            >
              {" "}
              <span className="space-x-6">
                <HiOutlineArrowLeft />
              </span>
              Back to Nike Store
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartEmpty;
