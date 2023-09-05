import React from "react";
import Link from "next/link";

import SalesOverview from "./SalesOverview";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../Layout/headerpage"), {
  ssr: false,
});
const NavigationPanel = dynamic(() => import("../Layout/navigation"), {
  ssr: false,
});

const FooterForPage = dynamic(() => import("../Layout/footer"), {
  ssr: false,
});

const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

import YearlyBreakup from "./YearlyBreakup";

const Dashboard = () => {
  return (
    <>
      {" "}
      <Title page="Dashboard"> </Title>
      <Header></Header>
      <NavigationPanel></NavigationPanel>
      <div className="flex bg-white-100 min-h-screen">
        <div
          className="w-1/4 p-4 overflow-y-scroll"
          style={{ maxHeight: "calc(100vh - 64px)" }}
        >
          <div className="mt-8">
            <ul className="space-y-4">
              <Link href="./Add_Admin_Account">
                <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                  {" "}
                  ✏ Add Admin{"\xa0 \xa0 \xa0 \xa0 "}
                </b>
              </Link>
              <br />
              <br />
              <br />
              <Link href="./Search_Admin">
                <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                  🔍 Search Admin{"\xa0\xa0 "}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Modify_Account">
                <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                  ✎ Modify Admin{"\xa0 \xa0"}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Delete_admin">
                <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                  🗑️ Delete Admin{"\xa0 \xa0 "}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Admin_blog_post">
                <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                  📰 Admin Blog {" \xa0  \xa0 \xa0 "}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Product_Add">
                <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                  ➕ Add Product{" \xa0 \xa0"}
                </b>
              </Link>
              <br />
              <br /> <br />
            </ul>
            <Link href="./Product_delete">
              <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                🚮 Product Delete
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./Product_Modify">
              <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                ✍🏼Product Modify
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./Product_search">
              <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                🔍 Product Search{"\xa0"}
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./show_product">
              <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                📜 Product Show{"\xa0 \xa0"}
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./show_admin">
              <b className="shadow-md p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                📜 Admin Show{"\xa0 \xa0 \xa0"}
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./LogIn">
              <b className="text-black-500 hover:underline custom-font-style">
                Login
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./Signup">
              <b className="text-black-500 hover:underline custom-font-style">
                Sign Up
              </b>
            </Link>
            <br />
          </div>
        </div>

        <div className="w-1/2 p-4 bg-white shadow-md">
          <h1 class="text-4xl font-bold text-black-700 mb-4">Sales Overview</h1>
          <br />
          <SalesOverview></SalesOverview>
        </div>

        <div className="w-1/4 p-4 bg-white shadow-md">
          <h1 class="text-4xl font-bold text-black-600 mb-4">Yearly Report </h1>
          <br />
          <YearlyBreakup></YearlyBreakup>
        </div>
      </div>
      <div>
        <FooterForPage />
      </div>
    </>
  );
};

export default Dashboard;
