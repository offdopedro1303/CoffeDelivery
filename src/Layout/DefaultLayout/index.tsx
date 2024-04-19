import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { Footer } from "../../components/Footer/index.tsx";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
