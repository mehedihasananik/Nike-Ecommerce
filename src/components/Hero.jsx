import Clips from "./utils/Clips";
import Social from "./utils/Social";

const Hero = ({
  heroapi: { title, btntext, img, sociallinks, subtitle, videos },
}) => {
  console.log(sociallinks);
  return (
    // main
    <div className="relative">
      {/* background */}
      <div className="absolute bg-theme clip-path top-0 left-0 right-0 h-[50vh] sm:h-[40vh]  md:h-[70vh] w-auto"></div>
      <div className="container  mx-auto z-20 relative visible xs:px-3 md:px-10">
        {/* content */}
        <div className="flex flex-col items-center pt-10">
          <h2 className="text-2xl md:text-5xl text-white/80 font-bold">
            {title}
          </h2>
          <h2 className=" text-2xl md:text-5xl text-white/80 font-bold">
            {subtitle}
          </h2>
          <button className="bg-white shadow-lg shadow-red-200 rounded-xl my-5  px-7 py-1  active:scale-90 transition-all duration-100 ease-in-out ">
            {btntext}
          </button>
        </div>
        {/* video & image div */}
        <div className="flex justify-between">
          <div className="space-y-5 ">
            {videos.map((item, index) => {
              return <Clips key={index} {...item} />;
            })}
          </div>
          <div>
            <img
              className="xs:w-[30vh] md:w-[70vh] md:-rotate-[35deg] hover:rotate-0 duration-300 cursor-pointer"
              src={img}
              alt=""
            />
          </div>
          <div className="space-y-5 ">
            {sociallinks.map((item, index) => {
              return <Social key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
