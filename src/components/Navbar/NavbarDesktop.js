import React from "react";
import Button from "../Button";
import { ChevronDownIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Logo from "../Logo";

const NavbarDesktop = () => {
    return (
        <div className="fixed bg-oldLace w-full">
            <div className="flex justify-center bg-oldLace">
            <div className="border-b-2 w-11/12">
                <div className="flex justify-between py-6 items-center">
                    <div className="flex gap-2 pt">
                        <Button preset="transparent">Eng</Button>
                        <ChevronDownIcon className="w-6"/>
                    </div>
                    <div className="flex items-center gap-14">
                        <Button preset="transparent">Woman</Button>
                        <Button preset="transparent">Men</Button>
                        <Button preset="transparent">Children</Button>
                        <Button preset="transparent">Beauty</Button>
                    </div>
                    <Logo className="w-36" />
                    <div className="flex items-center gap-11">
                        <Button preset="transparent">Search</Button>
                        <Button preset="transparent">Gifts</Button>
                        <Button preset="transparent">Stories</Button>
                        <Button preset="transparent">Log in</Button>
                        <Button preset="transparent">Bag(4)</Button>
                    </div>
                    <button>
                        <MenuAlt3Icon className="w-6 pt"/>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDesktop;