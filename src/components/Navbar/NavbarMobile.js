import React, { useState } from "react";
import Button from "../Button";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import Logo from "../Logo";

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
        { mode === "show" && 
            (
            <div className="fixed bg-oldLace w-full">
                <div className="flex justify-center">
                    <div className="flex flex-col bg-oldLace border-b w-5/6 py-6 pt-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center">
                                <button className="" onClick={hiddenHandler}>
                                    <Logo className="w-28" />
                                </button>
                            </div>
                            <Button preset="transparent">Woman</Button>
                            <Button preset="transparent">Men</Button>
                            <Button preset="transparent">Search</Button>
                            <Button preset="transparent">Bag(4)</Button>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        { mode === "hidden" && 
            (
            <div className="fixed bg-oldLace w-full">
                <div className="flex justify-center">
                    <div className="flex justify-between bg-oldLace border-b w-5/6 py-6 pt-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between pt">
                                <Logo className="w-28"/>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <Button preset="transparent">
                                <p className="tracking-wider pt-1">
                                    Bag(4)
                                </p>
                            </Button>
                            <button onClick={showHandler}>
                                <MenuAlt3Icon className="w-6 pt"/>
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

export default NavbarMobile;