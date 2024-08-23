import { useState } from "react";

const MenuItem = ({ name, price, options }) => {
  const [quantity, setQuantity] = useState(0);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="border p-6 rounded-lg shadow-lg bg-[#f8f8f8]">
      <h3 className="font-bold text-2xl">{name}</h3>
      {options.map((option, index) => (
        <div
          key={index}
          className="flex items-center justify-between space-x-4 mt-3"
        >
          <div className="flex items-center">
            <input
              type="radio"
              id={option.name}
              name={option.name}
              className="mr-2"
            />
            <label htmlFor={option.name} className="text-lg">
              {option.name}
            </label>
          </div>
          <p className="text-lg">{option.price}</p>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <div className="flex items-center bg-[#e2e3e3] p-1 rounded-full">
          <button
            onClick={decrement}
            className={`w-10 h-10 rounded-full text-2xl ${
              quantity > 0
                ? "bg-yellow-500 text-white"
                : "bg-[#e8e8e8] text-gray-400"
            }`}
          >
            -
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-xl m-0 p-0">
            {quantity}
          </span>
          <button
            onClick={increment}
            className={`w-10 h-10 rounded-full text-2xl ${
              quantity > 0
                ? "bg-[#3872f4] text-white"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            +
          </button>
        </div>
        <button className="bg-yellow-400 rounded p-2 text-lg">Customize</button>
      </div>
    </div>
  );
};

export default MenuItem;
