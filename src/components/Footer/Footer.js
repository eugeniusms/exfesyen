import React from "react";
import Button from "../Button";
import { CameraIcon, LinkIcon, GlobeIcon, AdjustmentsIcon } from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div className="bg-navy py-6 px-12">
        <div className="flex justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col text-creamy max-w-2xl gap-4">
                    <h1 className="text-2xl">Exfesyen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet metus ac nisi pretium sagittis ac vitae erat. Nunc tincidunt enim vitae tristique ultrices.</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex justify-center text-armyLight gap-6">
                <Button preset="transparent">About Us</Button>
                <Button preset="transparent">Gallery</Button>
                <Button preset="transparent">Contact</Button>
            </div>
            <div className="flex justify-center text-armyLight gap-6">
                <CameraIcon className="w-6 h-6"/>
                <LinkIcon className="w-6 h-6"/>
                <GlobeIcon className="w-6 h-6"/>
                <AdjustmentsIcon className="w-6 h-6"/>
            </div>
        </div>
        </div>
    )
}

export default Footer;