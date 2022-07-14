import React, { useState, useEffect } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
    const getWindowSizeFooter = () => {
        if (window.innerWidth < 768) {
            return true;
        } else {
            return false;
        }
    }

    const [isMobileFooter, setIsMobileFooter] = useState(getWindowSizeFooter);
 
    //choose the screen size
    const handleResizeFooter = () => {
        if (window.innerWidth < 768) {
            setIsMobileFooter(true)
        } else {
            setIsMobileFooter(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResizeFooter)
    })

    return (
        isMobileFooter ? <FooterMobile/> : <FooterDesktop/>
    )
}

export default Footer;