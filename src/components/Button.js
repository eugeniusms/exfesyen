import React from "react";

const Button = (props) => {
    return (
        <div>
            { props.preset == "submit" && 
                <button className="bg-armyLight rounded-md border-2 border-navy font-sans px-4 py-1 hover:bg-armyDark hover:drop-shadow-2xl hover:px-6 transition-all ease-out duration-300">
                    { props.children }
                </button> 
            }
            { props.preset == "cancel" && 
                <button className="bg-navy rounded-md border-2 border-navy font-sans text-white px-4 py-1 hover:text-softRed hover:drop-shadow-2xl hover:px-6 transition-all ease-out duration-300">
                    { props.children }
                </button> 
            }
        </div>
    )
}

export default Button;