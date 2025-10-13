import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";


export default function SectionDisplay() {
  return (
    <div className="max-w-360 mx-auto mid:overflow-y-hidden">
      <Header />
      <div className=" flex pl-2 mid:pl-0">
        <div className="w-[4%] mid:w-[5%] lg:w-1/5 mid:overflow-y-scroll hide-scrollbar h-screen">
          <Sidebar />
        </div>
        <div className="w-[96%] lg:w-4/5 pr-6 mid:px-6 mid:overflow-y-scroll hide-scrollbar h-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
