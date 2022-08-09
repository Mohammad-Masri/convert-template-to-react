import React from "react";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "../scss/style.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="c-app c-default-layout">
        <Sidebar />
        <div className="c-wrapper">
          <div className="c-body">
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
