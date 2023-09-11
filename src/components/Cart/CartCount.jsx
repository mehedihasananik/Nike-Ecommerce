import { AiOutlineDoubleLeft } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const CartCount = () => {
  return (
    <div>
      <div className="bg-white flex justify-between items-center py-2 px-2">
        <div className="flex items-center space-x-3">
          <span className="w-5 h-4">
            <AiOutlineDoubleLeft />
          </span>
          <div className="text-base font-medium">
            Your Cart{" "}
            <span className="bg-black py-1 px-1 text-[12px] text-white rounded-md">
              (0 Items)
            </span>
          </div>
        </div>
        <div className="bg-black text-white p-1 rounded-md">
          <span>
            {" "}
            <RxCross2 style={{ fontSize: "18px" }} className="stroke-[.5]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCount;
