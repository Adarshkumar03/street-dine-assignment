import React from "react";

const OrderInfo = () => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white h-screen">
      <h3 className="font-semibold mb-4 text-center text-xl">
        Cart Information
      </h3>
      <div className="text-center">
        <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded">
          Dine In
        </button>
        <button className="px-4 py-2 border-2 border-blue-600 rounded">
          Take Away
        </button>
      </div>
      <div className="flex justify-between mt-3 font-semibold">
        <p>Order - #021</p>
        <p>Token - 7</p>
        <p>Table No - 2</p>
      </div>
      <div className="mt-4">
        <h4 className="font-bold mb-2 text-gray-400">Items</h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="./DietCoke.png" className="w-16 h-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-lg">Diet Coke</span>
              <span className="text-gray-400">1X</span>
            </div>
          </div>
          <span className="font-semibold">₹80</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="./TandooriChicken.png" className="w-16 h-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-lg">Tandoori Chicken</span>
              <span className="text-gray-400">1X</span>
            </div>
          </div>
          <span className="font-semibold">₹80</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Add 2 Items</p>
        <button className="px-4 py-2 bg-yellow-400 rounded font-semibold">
          Place Order
        </button>
      </div>
      <button className="bg-[#008001] w-full p-2 m-2 text-white rounded-lg">
        Accept Cash Before
      </button>
      <button className="bg-[#fce876] w-full p-2 m-2 rounded-lg">
        Update Order
      </button>
    </div>
  );
};

export default OrderInfo;
