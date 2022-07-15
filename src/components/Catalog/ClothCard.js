import React from "react";
import Content from "../Fonts/Content";

const ClothCard = (props) => {

    // PERSINGKAT NAMA PRODUK;
    let info = props.productName
    const splitting = info.split(" ");

    const toCapital = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }

    let productName = "";
    for (let i = 0; i < splitting.length; i++) {
        if (i < 3) {
            productName += toCapital(splitting[i]) + " ";
        }
    }  

    return(
        // KOLASE PRODUK
        <div className="">
        <div className="bg-white border-black border">
            <div className="w-36 h-44">
                <div className="flex justify-center py-6">
                    <img src={ props.imageLink } alt="image" className="w-20 h-25"/> 
                </div>
            </div>
        </div>
        {/* NAMA PRODUK */}
        <div className="pt-2">
            <Content preset="kenscott">
                <div className="text-left text-sm tracking-wide">
                    { productName }
                </div>
            </Content>
        </div>
        {/* HARGA PRODUK */}
        <div className="pb-5">
            <Content preset="kenscott">
                <div className="text-left text-sm font-black">
                    ${ props.price }
                </div>
            </Content>
        </div>
        </div>
    )
}

export default ClothCard;