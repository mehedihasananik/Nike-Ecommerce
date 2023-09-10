import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiTwotoneHeart } from "react-icons/ai";
import { PiTimerLight } from "react-icons/pi";
import { BsHash } from "react-icons/bs";

/* eslint-disable react/prop-types */

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "0",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2 },
      768: { perPage: 2 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  return (
    // main div
    <div className="container mx-auto ">
      <div className="pb-5 md:pb-10">
        <h3 className="text-lg md:text-5xl font-bold text-black tracking-wide">
          {title}
        </h3>
      </div>

      <Splide options={splideOptions}>
        {news.map((item, index) => {
          const { btn, by, img, like, text, time, title, url } = item;
          return (
            <SplideSlide key={index}>
              <div className="md:max-w-sm">
                <div className="border rounded-lg">
                  {/* img */}
                  <div className="md:max-w-sm ">
                    <img
                      className="w-full h-full rounded-t-lg object-cover"
                      src={img}
                      alt=""
                    />
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
                        <h3 className="text-base text-black/70 font-bold">
                          {title}
                        </h3>
                      </div>
                      <div className="text-justify py-2">
                        {" "}
                        <p className="text-sm">{text.substring(0, 165)}...</p>
                      </div>
                      <div className="w-full bg-black text-white text-center py-2 rounded-lg shadow-md shadow-black cursor-pointer">
                        {" "}
                        <a href={url} target="_">
                          {" "}
                          <button className="">{btn}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Stories;
