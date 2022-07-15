import React from "react";

const EnteringEmailAddress = () => {
    return (
        <div className="flex justify-start w-11/12 pl-3 py-3">
            <div className="flex flex-col gap-6">
                <p className="text-left text-xs font-thin">By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our <u>Privacy Policy</u></p>
                <div className="flex justify-star items-center gap-2">
                    <p className="text-xs">Email : </p>
                    <input type="text" className="border-2 border-darkSmoke rounded-lg w-3/5"/>
                    <button className="bg-darkSmoke text-oldLace border-darkSmoke border-2 rounded-xl text-xs px-4 py-2 hover:px-6">subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default EnteringEmailAddress;