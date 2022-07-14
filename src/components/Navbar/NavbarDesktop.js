import React from "react";
import Button from "../Button";
import { ChevronDownIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Logo from "../Logo";

const NavbarDesktop = () => {
    return (
        <div className="flex justify-center">
            <div className="fixed bg-oldLace border-b-2 w-11/12">
                <div className="flex justify-between py-6 items-center">
                    <div className="flex gap-2 pt">
                        <Button preset="transparent">Eng</Button>
                        <ChevronDownIcon className="w-6"/>
                    </div>
                    <div className="flex gap-24 items-center">
                        <Button preset="transparent">Woman</Button>
                        <Button preset="transparent">Men</Button>
                        <Logo className="w-36" />
                        <Button preset="transparent">Search</Button>
                        <Button preset="transparent">Bag(4)</Button>
                    </div>
                    <button>
                        <MenuAlt3Icon className="w-6 pt"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavbarDesktop;