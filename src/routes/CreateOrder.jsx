import CreateOrderHeader from "../components/CreateOrderHeader";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";

const CreateOrder = () => {
  return (
    <div className="bg-[#ecf0f1] min-h-screen p-10">
      <CreateOrderHeader />
      <SearchBar />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Menu />
          <h1 className="text-2xl font-semibold mb-5">Dinner Menu</h1>
          <div className="grid grid-cols-3 gap-4">
            <MenuItem
              name="Veg Pizza"
              price="100"
              options={[
                { name: "Regular Size", price: "₹100" },
                { name: "Medium Size", price: "₹120" },
                { name: "Large Size", price: "₹150" },
              ]}
            />
            <MenuItem
              name="Veg Pasta"
              price="110"
              options={[
                { name: "Green Alfredo", price: "₹110" },
                { name: "White Sauce", price: "₹120" },
                { name: "Red Sauce", price: "₹130" },
              ]}
            />
          </div>
        </div>

        <Cart />
      </div>
    </div>
  );
};

export default CreateOrder;
