import { useState } from "react";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dinner");

  const menus = [
    { name: "Breakfast", icon: "./Breakfast.png", count: 5 },
    { name: "Lunch", icon: "./Lunch.png", count: 10 },
    { name: "Dinner", icon: "./Dinner.png", count: 20 },
    { name: "Dessert", icon: "./Dessert.png", count: 10 },
  ];

  return (
    <div className="flex space-x-5 mb-5">
      {menus.map((menu) => (
        <button
          key={menu.name}
          onClick={() => setSelectedMenu(menu.name)}
          className={`flex items-center px-6 py-1 rounded-lg  ${
            selectedMenu === menu.name
              ? "bg-blue-500 text-white"
              : "bg-[#f8f8f8] text-gray-800"
          }`}
        >
          <img src={menu.icon} className="mr-4 bg-white rounded-md" />
          <div className="flex flex-col items-start justify-start">
            <p className="font-semibold">{menu.name}</p>{" "}
            <p
              className={`text-sm ${
                selectedMenu == menu.name ? "text-white" : "text-gray-400"
              }`}
            >
              {menu.count} Menu
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Menu;
