import { useState } from "react";
import Order from "../components/Order";
import OrderInfo from "../components/OrderInfo"; // Assuming you have an OrderInfo component

const Dashboard = () => {
  const [isOrderInfoVisible, setOrderInfoVisible] = useState(false);

  const orders = [
    {
      tokenNumber: "1",
      orderNumber: "020",
      orderType: "Takeaway",
      paymentStatus: "Paid",
      instructions: "No onions",
      tableNumber: "2",
      items: [
        { name: "Burger", qty: 2, price: 200 },
        { name: "Fries", qty: 1, price: 100 },
      ],
      totalAmount: 500,
      remainingAmount: 0,
    },
    {
      tokenNumber: "2",
      orderNumber: "021",
      orderType: "Dine In",
      paymentStatus: "Not Paid",
      instructions: "Add extra cheese",
      items: [
        { name: "Veg Pizza", qty: 1, price: 350 },
        { name: "Pasta", qty: 1, price: 350 },
      ],
      totalAmount: 700,
      remainingAmount: 700,
    },
    {
      tokenNumber: "3",
      orderNumber: "022",
      orderType: "Delivery",
      paymentStatus: "Paid",
      instructions: "No spicy",
      items: [
        { name: "Chicken Wings", qty: 10, price: 500 },
        { name: "Coke", qty: 2, price: 100 },
      ],
      totalAmount: 600,
      remainingAmount: 0,
    },
    {
      tokenNumber: "4",
      orderNumber: "023",
      orderType: "Dine In",
      paymentStatus: "Not Paid",
      instructions: "Gluten-free pasta",
      items: [
        { name: "Gluten-Free Pasta", qty: 1, price: 400 },
        { name: "Salad", qty: 1, price: 200 },
      ],
      totalAmount: 600,
      remainingAmount: 600,
    },
    {
      tokenNumber: "5",
      orderNumber: "024",
      orderType: "Takeaway",
      paymentStatus: "Paid",
      instructions: "Extra napkins",
      items: [
        { name: "Sandwich", qty: 2, price: 250 },
        { name: "Juice", qty: 2, price: 150 },
      ],
      totalAmount: 400,
      remainingAmount: 0,
    },
  ];

  const buttons = ["All", "New Orders", "Dine In", "Take Away", "Payments"];

  const handleButtonClick = () => {
    setOrderInfoVisible(true);
  };

  const handleClose = () => {
    setOrderInfoVisible(false);
  };

  return (
    <div className="bg-[#ecf0f1] p-10">
      <h1 className="text-3xl font-semibold mb-10">Dashboard</h1>
      <div className="flex">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="px-5 py-1 bg-[#f8f8f8] text-lg rounded-md mr-10"
            onClick={handleButtonClick} // Show OrderInfo when clicked
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Render Order components */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {orders.map((order, index) => (
          <Order key={index} {...order} />
        ))}
      </div>

      {/* Sliding OrderInfo */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isOrderInfoVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-96`}
      >
        <button
          className="absolute top-5 right-5 text-lg font-bold"
          onClick={handleClose} // Close button
        >
          &times;
        </button>
        {/* Assuming orderData is a placeholder for selected order info */}
        <OrderInfo {...orders[0]} />
      </div>
    </div>
  );
};

export default Dashboard;
