import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import Dashbar from "./Dashbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Dashbar />
      <div className="flex flex-1">
        <Sidebar className="w-64 flex-shrink-0  " />
        <div className="flex-1 bg-gray-100 p-7">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;