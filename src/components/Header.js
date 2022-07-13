import React from "react";

const Header = (props) => {
    return (
        <div className="text-6xl p-6">
            { props.children }
        </div>
    )
}

export default Header;