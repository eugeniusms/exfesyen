import React, { useState } from "react";
import Button from "../Button";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/outline";

const NavbarMobile = () => {
    const [ mode, setMode ] = useState("hidden");

    const showHandler = () => {
        setMode("show");
    }

    const hiddenHandler = () => {
        setMode("hidden")
    }

    return (
        <div>   
        { mode == "show" && 
            (
            <div className="fixed w-full">
                <div className="flex flex-col bg-latteDark shadow-lg py-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between px-20">
                            <Button preset="transparent">Exfesyen</Button>
                            <button className="" onClick={hiddenHandler}>
                                <ChevronDoubleUpIcon className="w-4"/>
                            </button>
                        </div>
                        <Button preset="transparent">What's New</Button>
                        <Button preset="transparent">Category</Button>
                        <Button preset="transparent">Shopping Cart</Button>
                        <Button preset="transparent">Wishlist</Button>
                        <Button preset="transparent">Notification</Button>
                    </div>
                </div>
            </div>
            )
        }
        { mode == "hidden" && 
            (
            <div className="fixed w-full">
                <div className="flex bg-latteDark shadow-lg py-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between px-6 gap-6">
                            <Button preset="transparent">Exfesyen</Button>
                            <button onClick={showHandler}>
                                <ChevronDoubleDownIcon className="w-4"/>
                            </button>
                            <Button preset="transparent">What's New</Button>
                            <Button preset="transparent">Notification</Button>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default NavbarMobile;