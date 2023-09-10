/* eslint-disable react/prop-types */
const HightLight = ({
  ifExists,
  endPoint: { btn, heading, img, text, title, url },
}) => {
  // console.log(ifExists);
  return (
    <div className="container mx-auto  flex-row-reverse">
      <div
        className={`${
          ifExists
            ? "flex flex-col md:flex-row justify-between items-center"
            : "flex flex-col-reverse md:flex-row-reverse justify-between items-center"
        }`}
      >
        <div className="max-w-md">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="max-w-lg">
          <h3 className="text-blue-500 text-3xl font-bold tracking-wide">
            {heading}
          </h3>
          <h3 className="text-5xl font-bold text-black/80">{title}</h3>
          <p className="text-base py-3">{text}</p>
          <button className="bg-black py-2 px-6 text-white rounded-lg text-base shadow-md  shadow-slate-700">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HightLight;
