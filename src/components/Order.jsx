const Order = ({ tokenNo, orderNo, isPaid, isDineIn, items, total, rem }) => {
  const action = [
    {
      id: 1,
      name: "View Items",
      img: "",
    },
    {
      id: 2,
      name: "Print Invoice",
      img: "",
    },
    {
      id: 3,
      name: "Enter Customer Info",
      img: "",
    },
    {
      id: 4,
      name: "Assign Staff",
      img: "",
    },
  ];
  return (
    <div>
      <div>
        <div>
          <h1>T{tokenNo}</h1>
          <div>
            <h3>Token - {tokenNo}</h3>
            <h4>Order - #{orderNo}</h4>
          </div>
        </div>
        <div>
          {isDineIn ? <h5>Dine In</h5> : <h5>Take Away</h5>}
          {isPaid ? (
            <p>
              <span className="bg-red p-1 rounded-full"></span> Not Paid
            </p>
          ) : (
            <p>
              <span className="bg-green rounded-full p-1"></span> Paid
            </p>
          )}
        </div>
      </div>
      <div>
        <p>Instructions</p>
        <a href="">Add extra cheese</a>
      </div>
      <div>
        <h4>Items</h4>
        <h4>Qty</h4>
        <h4>Price</h4>
      </div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <h4>{item.qty}</h4>
            <h4>{item.price}</h4>
          </div>
        );
      })}
      <div>
        <h4>Total Amount</h4>
        <h4>-</h4>
        <h4>{total}</h4>
      </div>
      <div>
        <h4>Remaining Amount</h4>
        <h4>-</h4>
        <h4>{rem}</h4>
      </div>
      <div className="grid grid-cols-2 ">
        {action.map((act) => {
          return (
            <div key={act.id}>
              <img />
              <h5>{act.name}</h5>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Payment Options</h3>
        <div>Accept Cash Before</div>
        <div>Pay Later</div>
      </div>
    </div>
  );
};

export default Order;
