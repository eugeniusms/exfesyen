import React from "react";
import Button from "../Button";
import ScrollToTop from "./ScrollToTop";
import { PlusSmIcon } from "@heroicons/react/outline";

const FooterMobile = () => {
    return (
        <div className="w-full">
            <div className="bg-whiteSmoke">
                <div className="flex flex-col justify-center items-center">
                <ScrollToTop />
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3">
                    <Button preset="transparent">Need Help?</Button>
                    <PlusSmIcon className="w-4 items-center" />
                </div>
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3">
                    <Button preset="transparent">The Company</Button>
                    <PlusSmIcon className="w-4 items-center" />
                </div>
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3">
                    <Button preset="transparent">Find Us On</Button>
                    <PlusSmIcon className="w-4 items-center" />
                </div>
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3">
                    <Button preset="transparent">Sign Up For Exfes Updates</Button>
                    <PlusSmIcon className="w-4 items-center" />
                </div>
                <p className="text-xs pt-6 pb-6">© 2022 Exfesyen - All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile;