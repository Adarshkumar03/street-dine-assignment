import { useState } from "react";

const Nav = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    {
      id: 1,
      name: "Dashboard",
      img: "./Dashboard.png",
    },
    {
      id: 2,
      name: "Orders",
      img: "./Orders.png",
    },
    {
      id: 3,
      name: "Create Order",
      img: "./CreateOrder.png",
    },
    {
      id: 4,
      name: "Menu",
      img: "./Menu.png",
    },
    {
      id: 5,
      name: "Tables",
      img: "./Tables.png",
    },
    {
      id: 6,
      name: "Employees",
      img: "./Employees.png",
    },
    {
      id: 7,
      name: "Inventory",
      img: "./Inventory.png",
    },
    {
      id: 8,
      name: "Kitchen Orders",
      img: "./KitchenOrders.png",
    },
    {
      id: 9,
      name: "Reports",
      img: "./Reports.png",
    },
    {
      id: 10,
      name: "Settings",
      img: "./Settings.png",
    },
  ];
  return (
    <aside className="bg-[#f3f5f5] w-1/6 h-screen">
      <div className="flex justify-center items-center">
        <img src="./logo.png" />
      </div>
      <div className="flex flex-col">
        {items.map((item) => {
          const isSelected = selectedId == item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`flex items-center px-2 cursor-pointer mx-7 mb-3 rounded-md ${
                isSelected
                  ? "bg-gradient-to-r from-[#9255a3] to-[#e6dcea] font-semibold text-lg"
                  : ""
              } `}
            >
              <img src={item.img} className="mr-3" />
              <h2
                className={`font-semibold ${
                  isSelected ? "" : "text-[#62696B]"
                }`}
              >
                {item.name}
              </h2>
            </div>
          );
        })}
        <div
          className="flex items-center px-2 cursor-pointer mx-7 rounded-md mt-5"
        >
          <img src="./Logout.png" className=" mr-3 " alt="Log Out" />
          <h2 className="font-semibold text-[#62696B]">Log Out</h2>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
