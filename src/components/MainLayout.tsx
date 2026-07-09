import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

export default function MainLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
      <BottomNav />
    </>
  );
}
