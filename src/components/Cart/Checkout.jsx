const Checkout = ({ total }) => {
  return (
    <div>
      <div className="bg-white h-[12vh]  absolute bottom-0 w-full z-[300]  ">
        <div className="px-4 py-2">
          {/* upper div */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-black text-base font-semibold">SUBTOTAL</h3>
            </div>
            <div className="bg-black  text-white px-1 py-1  rounded-md text-sm">
              ${total}
            </div>
          </div>
          {/* lower div */}
          <div className="flex flex-col items-center">
            <div className="text-black text-sm font-medium">
              <h3>Taxes and Shipping Will Calculate At Shipping</h3>
            </div>
            <div className="w-full bg-black rounded-lg  text-white flex justify-center my-3">
              <button className="py-1 ">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
