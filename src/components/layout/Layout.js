import React, { useState, useEffect } from "react";
import "./Layout.scss";
import Sidebar from "../sidebar";
import Header from "../header";
import { useLocation } from "react-router-dom";

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
