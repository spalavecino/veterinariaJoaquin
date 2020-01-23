import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  const [location] = useState(useLocation());
  const [isLoginPage, setIsLoginPage] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsLoginPage(false);
    }
  }, [location]);

  if (isLoginPage) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <Header />
        <main className="Layout">{children}</main>
        <Sidebar />
      </React.Fragment>
    );
  }
};

export default Layout;
