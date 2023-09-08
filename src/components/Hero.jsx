import Clips from "./utils/Clips";
import Social from "./utils/Social";

const Hero = ({
  heroapi: { title, btntext, img, sociallinks, subtitle, videos },
}) => {
  console.log(sociallinks);
  return (
    // main
    <div>
      {/* background */}
      <div></div>
      {/* content */}
      <div>
        <h2></h2>
        <h2></h2>
        <button></button>
      </div>
      {/* video & image div */}
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
