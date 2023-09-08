import { AiOutlinePlayCircle } from "react-icons/ai";

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className="w-28 h-24 relative group transition-all duration-300 cursor-pointer z-10">
      <img
        className="w-full h-full absolute top-0 left-0 right-0 object-cover  rounded-lg"
        src={imgsrc}
        alt=""
      />
      <div className="w-20 h-20 absolute top-10 left-10 right-0 object-cover  rounded-lg opacity-100 group-hover:opacity-100 z-50 ">
        <AiOutlinePlayCircle className="bg-white" />
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="w-full h-full absolute top-0 left-0 right-0 object-cover opacity-0 group-hover:opacity-100  rounded-lg"
      >
        <source type="video/mp4" src={clip} />
      </video>
    </div>
  );
};

export default Clips;
