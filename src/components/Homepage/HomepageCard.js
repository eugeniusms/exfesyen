import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Content from "../Fonts/Content";
import ArrowRD from "../ArrowRD";

const HomepageCard = (props) => {
    return (
        <div className="flex flex-col gap-2">
            {/* BELOVED */}
            {/* ARROW */}
            <ArrowRD />
            <div className="flex flex-col justify-center gap-6">
                <div className="flex flex-col">
                    <p className="text-xs text-darkSmoke text-dm"><i>/{ props.category },</i></p>
                    <h1 className="text-5xl leading-none">{ props.firstName } </h1>
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
            <div className="flex flex-col gap-10">
                <div className="flex flex-col pt-8 pl-8">
                    <p className="text-left text-xs text-darkSmoke text-dm"><i>/Epilogue,</i></p>
                    <h2 className="text-left text-4xl tracking-wide">{ props.secondTitle } </h2>
                </div>
                
                <div className="text-left pl-24">
                    <Content preset="kenscott">{ props.secondContent }</Content>
                </div>
                
                <div className="flex flex-col">
                    <img src={ props.secondImage } className="pt-4" alt="Second Image" />
                    <div className="flex justify-center">
                        <div className="flex justify-center border-b-1 border-t-1 w-full py-3 items-center gap-2">
                            <button><p className="text-xs tracking-wide font-black">VIEW PRODUCT</p></button>
                            <ArrowRightIcon className="w-4"/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default HomepageCard;