import Item from "./utils/Item";
import Title from "./utils/Title";

const Popular = ({ endPoint: { title, items } }) => {
  console.log(title);
  return (
    <div className="container mx-auto">
      <Title title={title} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {items.map((item) => {
          console.log(item);
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
