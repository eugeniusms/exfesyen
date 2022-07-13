import React from "react";

const Card = (props) => {
    return (
        <div className="bg-gradient-to-t from-creamy to-white shadow-lg rounded-2xl w-2/3 h-2/3">
            { props.children }
        </div>
    )
}

export default Card;