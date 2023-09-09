import Item from "./utils/Item";
import Title from "./utils/Title";
/* eslint-disable react/prop-types */

const Popular = ({ ifExists, endPoint: { title, items } }) => {
  console.log(title);
  return (
    <div className="container mx-auto px-[2%] md:px-0">
      <Title title={title} />
      <div
        className={`grid grid-cols-1 gap-10 ${
          ifExists ? "md:grid-cols-3" : "md:grid-cols-4 "
        }`}
      >
        {items.map((item) => {
          console.log(item);
          return <Item key={item.id} {...item} ifExists={ifExists} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
