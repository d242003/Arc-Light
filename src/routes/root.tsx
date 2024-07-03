import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="font-abeezee bg-[#EEEEEE] min-h-screen">
      <Outlet />
    </div>
  );
}
