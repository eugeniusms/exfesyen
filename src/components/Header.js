import React from "react";

const Header = (props) => {
    return (
        props.preset === "slash" ? (
            <div className="text-left text-3xl p-6 tracking-none leading-none pt-12 pb-8">
                <div className="kenscott">
                    /{ props.children }
                </div>
            </div>
        ) : (
        <div className="text-6xl p-6">
            { props.children }
        </div>
        )
    )
}

export default Header;