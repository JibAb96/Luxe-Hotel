import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return(
        <div className="wrapper">
            <Navigation />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}