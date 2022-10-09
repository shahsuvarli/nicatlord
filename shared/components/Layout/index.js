import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
