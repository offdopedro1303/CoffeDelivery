import { Outlet } from "react-router-dom";
import { Header } from "../../components/pages/Home/Header/Index";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
