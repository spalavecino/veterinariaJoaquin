import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  const [location] = useState(useLocation());
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [sidebarOn, setSidebarOn] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsLoginPage(false);
    }
  }, [location]);

  const handleClick = () => {
    setSidebarOn(!sidebarOn);
  };

  if (isLoginPage) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <Header buttonPressed={sidebarOn} click={handleClick} />
        <main className={"Layout" + (sidebarOn ? " active" : "")}>
          {children}
        </main>
        <Sidebar showSidebar={sidebarOn} />
      </React.Fragment>
    );
  }
};

export default Layout;
