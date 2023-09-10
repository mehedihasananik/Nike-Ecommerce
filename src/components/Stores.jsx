import News from "./utils/News";

/* eslint-disable react/prop-types */

const Stores = ({ story: { title, news } }) => {
  return (
    // main div
    <div className="container mx-auto">
      <div className="pb-5 md:pb-10">
        <h3 className="text-lg md:text-5xl font-bold text-black tracking-wide">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {news.map((item) => {
          console.log(item);
          return <News key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Stores;
