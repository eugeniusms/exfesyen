import React, { useState } from "react";
import Button from "../Button";
import { ChevronDoubleUpIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Logo from "../Logo";

const NavbarMobileNew = () => {
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
            <div className="flex justify-center font-dm font-bold">
                <div className="fixed border-b w-5/6 pt-4">
                    <div className="flex flex-col bg-oldLace py-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center">
                                <button className="" onClick={hiddenHandler}>
                                    <Logo className="w-28" />
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
            </div>
            )
        }
        { mode == "hidden" && 
            (
            <div className="flex justify-center font-dm font-bold">
                <div className="fixed border-b w-5/6 pt-4">
                    <div className="flex justify-between bg-oldLace py-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between pt">
                                <Logo className="w-28"/>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <Button preset="transparent">
                                <p className="tracking-wider pt-2">
                                    Bag(4)
                                </p>
                            </Button>
                            <button onClick={showHandler}>
                                <MenuAlt3Icon className="w-5 pt"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </div>
    )
}

export default NavbarMobileNew;