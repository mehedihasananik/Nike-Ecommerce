import Clips from "./utils/Clips";

const Hero = ({
  heroapi: { title, btntext, img, sociallinks, subtitle, videos },
}) => {
  return (
    // main
    <div className="relative">
      {/* background */}
      <div className="bg-theme clip-path absolute top-0 left-0 right-0 h-[70vh] w-auto opacity-100 z-10"></div>
      {/* content */}
      <div className="container mx-auto">
        <div className="relative opacity-100 z-20">
          <div className="text-5xl text-white font-bold">
            <div className="flex flex-col items-center py-10">
              <h3>{title}</h3>
              <h3>{subtitle}</h3>
              <button className="text-sm bg-white px-5 py-1 rounded-full shadow-2xl text-black font-normal ring-offset-2 ring-blue-700 mt-2">
                {btntext}
              </button>
            </div>
            {/* <div className=""></div>
              <div className=""></div> */}
          </div>
        </div>
        {/* img */}
        <div className="relative opacity-100 z-20 ">
          <img className="h-[30vh] md:h-[30vh] " src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
