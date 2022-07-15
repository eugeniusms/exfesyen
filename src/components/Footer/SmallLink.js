import React from "react"
import Button from "../Button";
import { ChevronRightIcon } from "@heroicons/react/outline";

const SmallLink = (props) => {
    return (
        <div className="w-11/12 flex justify-end">
            <div className="flex justify-between border-b-1 w-11/12 flex py-3">
                <Button preset="transparent">
                    <p className="text-xs font-thin">
                        {props.children}
                    </p>
                </Button>
                <ChevronRightIcon className="w-3 items-center"/>
            </div>
        </div>
    )
}

export default SmallLink;