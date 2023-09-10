const Footer = ({ footerAPI: { links, titles } }) => {
  return (
    <div className="bg-theme py-10">
      <div className="container mx-auto">
        <div className="grid justify-center text-white/80 ">
          <div className="grid grid-cols-3  md:gap-x-20">
            {/* Titles */}
            {titles.map((item) => {
              return (
                <h3
                  className="text-md md:text-lg font-bold leading-6 tracking-wider pb-2"
                  key={item.id}
                >
                  {item.title.toUpperCase()}
                </h3>
              );
            })}
          </div>
          <div className="grid grid-cols-3 md:gap-x-20 ">
            {/* Links */}
            {links.map((item) => {
              return (
                <div className="space-y-1" key={item.key}>
                  {item.map((i, index) => {
                    return (
                      <h3 className="text-xs md:text-sm " key={index}>
                        {i.link}
                      </h3>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="grid justify-center  pt-5 ">
            <p>
              Copyright© All Reserved Rights To{" "}
              <span className="font-bold">Mehedi</span> 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
