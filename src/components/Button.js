import React from "react";

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
                <button className={"font-dm font-bold lg:text-lg hover:text-creamy hover:px-4 transition-all ease-out duration-300 " + props.className}>
                    <p className="text-sm tracking-wide">
                        { props.children }
                    </p>
                </button>
            }
        </div>
    )
}

export default Button;