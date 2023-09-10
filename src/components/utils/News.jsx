/* eslint-disable react/prop-types */
import { AiTwotoneHeart } from "react-icons/ai";
import { PiTimerLight } from "react-icons/pi";
import { BsHash } from "react-icons/bs";

const News = ({ btn, by, img, like, text, time, title, url }) => {
  return (
    <div className="max-w-sm">
      <div className="border rounded-lg">
        {/* img */}
        <div className="max-w-sm">
          <img className="w-full h-full" src={img} alt="" />
        </div>

        <div className="p-3">
          {/* comments */}
          <div className="flex justify-between">
            <div className="flex items-center">
              <span>
                <AiTwotoneHeart className="text-red-700" />
              </span>
              <p> {like}</p>
            </div>
            <div className="flex items-center">
              {" "}
              <span>
                <PiTimerLight />
              </span>
              <p>{time}</p>
            </div>
            <div className="text-blue-600 font-bold text-xs flex items-center justify-center">
              <span className="text-lg ">
                <BsHash style={{ fontSize: "30px" }} className="" />
              </span>
              <p>{by}</p>
            </div>
          </div>
          {/* des & button */}
          <div className="">
            <div className="pt-2">
              <h3 className="text-base text-black/70 font-bold">{title}</h3>
            </div>
            <div className="text-justify py-2">
              {" "}
              <p className="text-sm">{text.substring(0, 165)}...</p>
            </div>
            <div className="w-full bg-black text-white text-center py-2 rounded-lg shadow-md shadow-black cursor-pointer">
              {" "}
              <button className="">{btn}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
