import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className='bg-primary'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
