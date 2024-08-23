const CreateOrderHeader = () => {
  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-3xl font-bold">Add Order</h1>
      <div className="flex items-center space-x-4">
        <span>
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>

        <div className="flex items-center space-x-2 ml-4">
          <img
            src="ProfilePic.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col justify-center items-center">
            <span>Shruti Bisht</span>
            <span className="text-gray-500 text-sm">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderHeader;
