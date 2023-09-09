const Title = ({ title }) => {
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="text-2xl md:text-5xl text-black font-bold py-5 md:py-10">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Title;
