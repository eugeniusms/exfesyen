import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { FiArrowUpRight } from "react-icons/fi";

const Button = (props) => {
    return (
        <div>
            { props.preset === "submit" && 
                <button className="bg-latteLight rounded-xl border-2 border-navy font-sans px-4 py-1 hover:bg-latteDark hover:drop-shadow-2xl hover:px-6 transition-all ease-out duration-300">
                    <p className="tracking-wider">
                        { props.children }
                    </p>
                </button> 
            }
            { props.preset === "cancel" && 
                <button className="bg-navy rounded-xl border-2 border-navy font-sans text-white px-4 py-1 hover:text-softRed hover:drop-shadow-2xl hover:px-6 transition-all ease-out duration-300">
                    <p className="tracking-wider">
                        { props.children }
                    </p>
                </button> 
            }
            { props.preset === "transparent" && 
                <button className={"font-dm font-bold lg:text-lg hover:text-creamy hover:px-4 transition-all ease-out duration-300 " + props.className} onClick={props.onClick}>
                    <p className="text-sm tracking-wide">
                        { props.children }
                    </p>
                </button>
            }
            { props.preset === "shopnow" &&
                <div className="flex justify-center">
                    <div className="flex justify-center border-b-1 border-t-1 w-5/6 py-3 items-center gap-2">
                        <button><p className="text-xs tracking-wide font-black">SHOP NOW</p></button>
                        <ArrowRightIcon className="w-4"/>
                    </div>
                </div>
            }
            { props.preset === "sortby-left" &&
                <div className="flex justify-center pl-6">
                    <div className="flex justify-between border-b-1 border-t-1 py-3 items-center gap-2">
                        <button><p className="text-xs tracking-wide font-black">{ props.children }</p></button>
                        <div className="px-9"></div>
                        <FiArrowUpRight className="w-4"/>
                    </div>
                </div>
            }
            { props.preset === "sortby-right" &&
                <div className="flex justify-center pr-6">
                    <div className="flex justify-between border-b-1 border-t-1 py-3 items-center gap-2">
                        <button><p className="text-xs tracking-wide font-black">{ props.children }</p></button>
                        <div className="px-9"></div>
                        <FiArrowUpRight className="w-4"/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Button;