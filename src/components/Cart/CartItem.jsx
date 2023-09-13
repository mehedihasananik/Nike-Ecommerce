import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { deCreaseItem, increaseItem, removeItem } from "../../redux/cartSlice";
import Checkout from "./Checkout";

const CartItem = ({ total }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length >= 1 && (
        <>
          <div className="h-[80vh] overflow-y-scroll scroll-smooth bg-[#E3EDFA] py-5 px-2 space-y-5">
            {cartItems.map((item) => {
              const { id, img, text, title, price, quantity } = item;
              return (
                <div key={id}>
                  <div className="flex justify-between pt-2">
                    <div className="flex max-w-lg gap-x-5 md:gap-x-10 pt-2">
                      {/* img */}
                      <div className="bg-blue-600 p-3 rounded-lg shadow-lg shadow-blue-600">
                        <img className="w-40" src={img} alt="" />
                      </div>
                      {/* title & button */}
                      <div>
                        {/* title */}
                        <div className="">
                          <h3 className="text-[12px] md:text-base font-medium">
                            {title}
                          </h3>
                          <h3 className="text-[12px] md:text-base ">{text}</h3>
                        </div>
                        {/* button */}
                        <div className="flex justify-start space-x-4 pt-4 px-4">
                          <button
                            onClick={() => {
                              if (quantity === 1) {
                                dispatch(removeItem(id));
                              }
                              dispatch(deCreaseItem(id));
                            }}
                            className="flex items-center justify-center text-white bg-black   rounded-md  "
                          >
                            <BiMinus className="w-6 h-5" />
                          </button>
                          <div className=" text-white bg-black rounded-md py-0.5 ">
                            <span className="w-6 h-5 flex items-center justify-center ">
                              {quantity}
                            </span>
                          </div>
                          <button
                            onClick={() => dispatch(increaseItem(id))}
                            className="flex items-center justify-center text-white bg-black   rounded-md  "
                          >
                            <BiPlus className="w-6 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* price */}
                    <div
                      className="flex flex-col justify-between xs:h-[88px]  sml:h-[93px] 
                    lsm:h-[87px] md:h-[100px] pt-2"
                    >
                      <div>
                        <h3>{price * quantity}</h3>
                      </div>
                      <div>
                        <button
                          onClick={() => dispatch(removeItem(id))}
                          className="flex items-center justify-center text-white bg-black   rounded-md py-1 "
                        >
                          <RiDeleteBinLine className="w-7 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Checkout total={total} />
        </>
      )}
    </>
  );
};

export default CartItem;
