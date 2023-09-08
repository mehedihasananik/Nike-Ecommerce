import { AiOutlinePlayCircle } from "react-icons/ai";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className="relative h-14 w-20 top-3 md:top-0  md:h-24 md:w-32 group">
      <img
        className="w-full h-full object-cover absolute top-0 left-0 right-0 rounded-lg"
        src={imgsrc}
        alt=""
      />
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="w-full h-full object-cover absolute top-0 left-0 right-0 rounded-lg opacity-0 group-hover:opacity-100 cursor-pointer"
        src={clip}
      ></video>
    </div>
  );
};

export default Clips;
