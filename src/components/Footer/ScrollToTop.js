import React from "react";
import Button from "../Button";
import { ChevronUpIcon } from "@heroicons/react/outline";

const ScrollToTop = () => {
    // go to top pages
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex bg-darkSmoke justify-center w-full pt-2 pb">
            <Button preset="transparent" className="text-oldLace" onClick={goToTop}>
                <div className="flex gap-2">
                <ChevronUpIcon className="w-4"/>
                Back to Top
                </div>
            </Button>
        </div>
    );
};
export default ScrollToTop;