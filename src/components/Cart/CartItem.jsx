import { useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const CartItem = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      {cartItems.length >= 1 && (
        <div className="bg-[#E3EDFA] py-5 px-2 space-y-5">
          {cartItems.map((item) => {
            const { id, img, text, title, price, quantity } = item;
            return (
              <div key={id}>
                <div className="flex justify-between">
                  <div className="flex max-w-lg gap-x-10 ">
                    {/* img */}
                    <div className="bg-blue-600 p-3 rounded-lg shadow-lg shadow-blue-600">
                      <img className="w-40" src={img} alt="" />
                    </div>
                    {/* title & button */}
                    <div>
                      {/* title */}
                      <div className="pt-2">
                        <h3 className="text-base font-medium">{title}</h3>
                        <h3 className="text-sm ">{text}</h3>
                      </div>
                      {/* button */}
                      <div className="flex justify-start space-x-4 pt-4 px-4">
                        <button className="flex items-center justify-center text-white bg-black   rounded-md  ">
                          <BiMinus className="w-6 h-5" />
                        </button>
                        <div className=" text-white bg-black rounded-md py-0.5 ">
                          <span className="w-6 h-5 flex items-center justify-center ">
                            {quantity}
                          </span>
                        </div>
                        <button className="flex items-center justify-center text-white bg-black   rounded-md  ">
                          <BiPlus className="w-6 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* price */}
                  <div className="pt-2 flex flex-col gap-y-5">
                    <div>
                      <h3>{price}</h3>
                    </div>
                    <div>
                      <button className="flex items-center justify-center text-white bg-black   rounded-md py-1 ">
                        <RiDeleteBinLine className="w-7 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CartItem;
