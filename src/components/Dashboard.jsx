const Dashboard = () => {
  const items = [
    {
      id: 1,
      name: "Dashboard",
      img: "",
    },
    {
      id: 2,
      name: "Create Order",
      img: "",
    },
    {
      id: 3,
      name: "Orders",
      img: "",
    },
  ];
  return (
    <aside>
      <div className="flex flex-col">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex justify-between">
              <h2>{item.name}</h2>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Dashboard;
