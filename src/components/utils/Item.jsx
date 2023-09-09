import { AiTwotoneStar } from "react-icons/ai";

const Item = ({ btn, color, id, img, price, rating, shadow, text, title }) => {
  console.log(color);
  return (
    <div className="container mx-auto">
      <div
        className={`bg-gradient-to-b ${color} flex flex-col items-center h-80 rounded-xl py-2`}
      >
        {/* title */}
        <div className="flex flex-col">
          {/* title */}
          <div className="text-center">
            <h3 className="text-xl text-white font-medium leading-5">
              {title}
            </h3>
            <p className="text-base text-white font-medium leading-5">{text}</p>
          </div>
          {/* price rating */}
          <div className="flex justify-around py-2">
            <div className="flex justify-center items-center bg-white/80 text-xs rounded-md px-[5px] py-[1px]">
              <p>${price}</p>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <span>
                <AiTwotoneStar className="text-white w-6 h-5" />
              </span>
              <p>{rating}</p>
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-around">
            <div>
              {" "}
              <p>icon</p>
            </div>
            <div>
              <button>{btn}</button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-[280px] h-[120px]">
          <img className="w-60 h-full" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Item;
