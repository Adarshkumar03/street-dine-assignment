import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export const Main = () => {
  return (
    <div className="flex">
      <Nav />
      <div className="ml-[16.67%] w-5/6">
        <Outlet />
      </div>
    </div>
  );
};
