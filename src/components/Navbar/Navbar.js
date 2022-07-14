import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    // SOLUTION AUTO RESPONSIVE WITH GADGET
    // Using getter size of window width to first state
    const getWindowSize = () => {
        if (window.innerWidth < 768) {
            return true;
        } else {
            return false;
        }
    }

    const [isMobile, setIsMobile] = useState(getWindowSize);
 
    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        isMobile ? <NavbarMobile/> : <NavbarDesktop/>
    )
}

export default Navbar;