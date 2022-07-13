import React from "react";
import Button from "../Button";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-latteDark shadow-lg rounded-b-xl py-4">
            <div className="pl-12">
            <Button preset="transparent">Exfesyen</Button>
            </div>
            <div className="flex justify-end gap-12 pr-12">
                <Button preset="transparent">What's New</Button>
                <Button preset="transparent">Category</Button>
                <Button preset="transparent">Shopping Cart</Button>
                <Button preset="transparent">Wishlist</Button>
                <Button preset="transparent">Notification</Button>
            </div>
        </div>
    )
}

export default Navbar;