import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/layout/footer";
import { Outlet } from "@remix-run/react";
import Header from "~/components/layout/header";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kurs Pisania" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grid grid-flow-row grid-cols-1 overflow-hidden ">
      <Header colSpan="" />
      <Outlet />
      <Footer />
    </div>
  );
}
