import React from "react";
import Button from "../Button";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobileNew from "./NavbarMobileNew";

const Navbar = () => {
    const width = window.innerWidth;
    const breakpoint = 768;

    return (
        width < breakpoint ? <NavbarMobileNew/> : <NavbarDesktop/>
    )
}

export default Navbar;