import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

const HomepageCard = (props) => {
    return (
        <div className="flex flex-col gap-2">
            {/* BELOVED */}
            {/* ARROW */}
            <div className="pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-right"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
            </div>
            <div className="flex flex-col justify-center gap-6">
                <div className="flex flex-col">
                    <p className="text-xs text-darkSmoke text-dm"><i>/{ props.category },</i></p>
                    <h1 className="text-5xl leading-none">Cassie</h1>
                </div>
                <img src={ props.firstImage } alt="First Image" />

                <div className="flex justify-center">
                    <div className="flex justify-center border-b-1 border-t-1 w-5/6 py-3 items-center gap-2">
                        <button><p className="text-xs tracking-wide font-black">SHOP NOW</p></button>
                        <ArrowRightIcon className="w-4"/>
                    </div>
                </div>
            </div>
            {/* EPILOGUE */}
            <div className="p-8">
                <p className="text-left text-xs text-darkSmoke text-dm"><i>/Epilogue,</i></p>
            </div>  
        </div>
    )
}

export default HomepageCard;