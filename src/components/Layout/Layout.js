import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
