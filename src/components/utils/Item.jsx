import { AiTwotoneStar } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTocart, openModel } from "../../redux/cartSlice";

/* eslint-disable react/prop-types */

const Item = ({
  ifExists,
  btn,
  color,
  id,
  img,
  price,
  rating,
  shadow,
  text,
  title,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addTocart({ btn, color, id, img, price, rating, shadow, text, title })
    );
  };
  return (
    <div className="container mx-auto">
      <div
        className={`${
          ifExists
            ? `bg-gradient-to-b ${color} flex justify-center items-center  rounded-xl py-2 px-4 md:hover:scale-105 cursor-pointer  transition-all ease-in-out duration-700 relative md:mb-5`
            : `bg-gradient-to-b ${color} flex flex-col items-center  rounded-xl py-4 md:hover:scale-105 cursor-pointer  transition-all ease-in-out duration-700`
        } `}
      >
        {/* title */}
        <div className="flex flex-col">
          {/* title */}
          <div className={`${ifExists ? "" : "text-center"}`}>
            <h3 className="text-xl text-white font-medium leading-5 whitespace-nowrap pb-2">
              {title}
            </h3>
            <p className="text-base text-white font-medium leading-5">{text}</p>
          </div>
          {/* price rating */}
          <div
            className={`flex py-2  ${
              ifExists ? "justify-start" : "justify-center space-x-3 "
            }`}
          >
            <div className="flex justify-center items-center bg-white/80 text-xs rounded-md px-[5px] py-[1px]">
              <p>${price}</p>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <span>
                <AiTwotoneStar className="text-white w-6 h-5" />
              </span>
              <p className="text-white">{rating}</p>
            </div>
          </div>
          {/* buttons */}
          <div
            className={`flex py-2   ${
              ifExists ? "justify-start space-x-3" : "justify-center space-x-3 "
            }`}
          >
            <div className="flex justify-center items-center bg-white/80 text-xs rounded-md px-[5px] py-[5px]">
              {" "}
              <button
                onClick={() => {
                  handleAddToCart();
                }}
              >
                <BsFillBagCheckFill className="w-5 h-5" />
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  handleAddToCart();
                  dispatch(openModel());
                }}
                className="bg-white/90 px-3 py-1 rounded-lg text-sm shadow-lg shadow-slate-400 border-none"
              >
                {btn}
              </button>
            </div>
          </div>
        </div>
        {/* image */}
        <div
          className={`${
            ifExists ? " w-[240px] h-[120px]" : "w-[300px] h-[140px]"
          }`}
        >
          <img
            className={`w-60 h-full  cursor-pointer duration-300 ${
              ifExists
                ? "md:absolute left-19 right-3 top-2 rotate-[-40deg] hover:rotate-0"
                : "hover:-rotate-12"
            }`}
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
