import React from "react";

const Content = (props) => {
    return (
        <>
        { props.preset === "kenscott" && 
        (
            <p className="kenscott">
                { props.children }
            </p>
        )}
        </>
    )
};

export default Content;