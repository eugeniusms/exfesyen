import React from "react";
import Button from "../Button";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    const width = window.innerWidth;
    const breakpoint = 768;

    return (
        width < breakpoint ? <NavbarMobile/> : <NavbarDesktop/>
    )
}

export default Navbar;