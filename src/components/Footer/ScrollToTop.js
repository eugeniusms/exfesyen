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
        <div className="flex bg-navy justify-center w-full pt-4 pb-2">
            <Button preset="transparent" onClick={goToTop}>
                <div className="flex gap-2">
                <ChevronUpIcon className="w-4"/>
                Back to Top
                </div>
            </Button>
        </div>
    );
};
export default ScrollToTop;