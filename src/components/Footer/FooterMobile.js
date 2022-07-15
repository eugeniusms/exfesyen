import React from "react";
import Button from "../Button";
import ScrollToTop from "./ScrollToTop";

const FooterMobile = () => {
    return (
        <div className="w-full">
            <div className="bg-whiteSmoke py-24">
                <ScrollToTop />
                <Button preset="transparent">Need Help?</Button>
                <Button preset="transparent">The Company</Button>
                <Button preset="transparent">Find Us On</Button>
                <Button preset="transparent">Sign Up For Exfes Updates</Button>
                <p>© 2022 Exfesyen - All rights reserved.</p>
            </div>
        </div>
    )
}

export default FooterMobile;