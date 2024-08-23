const OrderCard = ({
  tokenNumber,
  orderNumber,
  orderType,
  paymentStatus,
  instructions,
  items,
  totalAmount,
  remainingAmount,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      {/* Order Info Section */}
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="bg-yellow-500 rounded-lg w-12 h-12 flex items-center justify-center">
            <span className="font-bold text-xl">T{tokenNumber}</span>
          </div>
          <div className="ml-4">
            <h2 className="font-bold">Token - {tokenNumber}</h2>
            <p className="text-gray-500">Order #{orderNumber}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <p className="bg-[#98b5f4] px-3 py-1 rounded-lg flex justify-center items-center font-semibold text-sm">
            {orderType}
          </p>
          <div className="flex items-center justify-end">
            <span
              className={`h-2 w-2 rounded-full mr-2 ${
                paymentStatus === "Paid" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <p className="text-gray-800">{paymentStatus}</p>
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className="mt-4">
        <div className="flex justify-between">
          <h3 className="text-md">Instructions</h3>
          <a href="#" className="text-blue-500 text-md font-semibold">
            {instructions}
          </a>
        </div>

        <div className="mt-2">
          <div className="grid grid-cols-3 gap-4 py-1 text-gray-400">
            <span className="text-[0.87rem]">Items</span>
            <span className="text-center text-[0.87rem]">Qty</span>
            <span className="text-right text-[0.87rem]">Price</span>
          </div>
          {items.map((item, index) => (
            <div
              className="grid grid-cols-3 gap-4 py-1 font-semibold"
              key={index}
            >
              <span className="text-[0.87rem]">{item.name}</span>
              <span className="text-center text-[0.87rem]">{item.qty}</span>
              <span className="text-right text-[0.87rem]">₹ {item.price}</span>
            </div>
          ))}
        </div>

        <div className="">
          <div className="grid grid-cols-3 gap-6 py-1 font-semibold">
            <span className="text-[0.87rem]">Total Amount</span>
            <span className="text-center text-[0.87rem]">-</span>
            <span className="text-right text-[0.87rem]">₹ {totalAmount}</span>
          </div>
          <div className="grid grid-cols-3 gap-6 py-1 font-semibold">
            <span className="text-[0.87rem]">Remaining Amount</span>
            <span className="text-center text-[0.87rem]">-</span>
            <span className="text-right text-[0.87rem]">
              ₹ {remainingAmount}
            </span>
          </div>
        </div>
      </div>

      {/* Actions Section */}
      <div className="mt-4 space-y-4">
        <div className="flex justify-between">
          <button className="bg-[#98b5f4] text-white py-1 px-3 rounded-lg text-sm flex items-center">
            <img src="./OrderPackage.png" className="mr-2" /> View Items
          </button>
          <button className="bg-gray-800 text-white py-1 px-3 rounded-lg text-sm flex items-center">
            <img src="./Print.png" className="mr-2" /> Print Invoice
          </button>
        </div>
        <div className="flex justify-between">
          <button className="bg-[#3772f0] text-white py-1 px-3 rounded-lg text-sm flex items-center">
            <img src="./User.png" className="mr-2" /> Enter Customer Info
          </button>
          <button className="bg-gray-800 text-white py-1 px-3 rounded-lg text-sm flex items-center">
            <img src="./Users.png" className="mr-2" /> Assign Staff
          </button>
        </div>
      </div>

      {/* Payment Section */}
      <h3 className="mt-3">Payment Options</h3>
      <div className="mt-4 flex justify-between">
        <button className="bg-[#008001] text-white px-4 py-2 rounded-lg mr-2">
          Accept Cash Before
        </button>
        <button className="bg-[#008001] text-white p-3 rounded-lg">
          Pay Later
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
