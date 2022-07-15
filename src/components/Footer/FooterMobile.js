import React, { useState } from "react";
import Button from "../Button";
import ScrollToTop from "./ScrollToTop";
import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline";
import SmallLink from "./SmallLink";
import EnteringEmailAddress from "./EnteringEmailAddress";

const FooterMobile = () => {

    const [ showNeedHelp, setShowNeedHelp ] = useState(false);
    const [ showTheCompany, setShowTheCompany ] = useState(false);
    const [ showFindUsOn, setShowFindUsOn ] = useState(false);
    const [ showSignUp, setShowSignUp ] = useState(false);

    const needHelpHandler = () => {
        if (showNeedHelp === true) {
            setShowNeedHelp(false)
        } else {
            setShowNeedHelp(true);
        }
    }

    const theCompanyHandler = () => {
        if (showTheCompany === true) {
            setShowTheCompany(false)
        } else {
            setShowTheCompany(true);
        }
    }

    const findUsOnHandler = () => {
        if (showFindUsOn === true) {
            setShowFindUsOn(false)
        } else {
            setShowFindUsOn(true);
        }
    }

    const signUpHandler = () => {
        if (showSignUp === true) {
            setShowSignUp(false)
        } else {
            setShowSignUp(true);
        }
    }

    return (
        <div className="w-full">
            <div className="bg-whiteSmoke">
                <div className="flex flex-col justify-center items-center">
                <ScrollToTop />
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3 pl-3">
                    <Button preset="transparent">Need Help?</Button>
                    <button onClick={needHelpHandler}>
                        { showNeedHelp ? <MinusSmIcon className="w-4 items-center"/> : <PlusSmIcon className="w-4 items-center" /> }
                    </button>
                </div>
                {/* NEED HELP ATTRIBUTES */}
                { showNeedHelp && <SmallLink>Contact Us</SmallLink>}
                { showNeedHelp && <SmallLink>Shipping Services</SmallLink>}
                { showNeedHelp && <SmallLink>Payment Options</SmallLink>}
                { showNeedHelp && <SmallLink>Return and Exchanges</SmallLink>}
                { showNeedHelp && <SmallLink>Product Care</SmallLink>}
                { showNeedHelp && <SmallLink>FAQs</SmallLink>}
                { showNeedHelp && <SmallLink>Unsubscribe</SmallLink>}
                { showNeedHelp && <SmallLink>Sitemap</SmallLink>}
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3 pl-3">
                    <Button preset="transparent">The Company</Button>
                    <button onClick={theCompanyHandler}>
                        { showTheCompany ? <MinusSmIcon className="w-4 items-center"/> : <PlusSmIcon className="w-4 items-center" /> }
                    </button>
                </div>
                {/* THE COMPANY ATTRIBUTES */}
                { showTheCompany && <SmallLink>About Exfesyen</SmallLink>}
                { showTheCompany && <SmallLink>Exfesyen Equilibrium</SmallLink>}
                { showTheCompany && <SmallLink>Code of Ethics</SmallLink>}
                { showTheCompany && <SmallLink>Exfesyen Garden</SmallLink>}
                { showTheCompany && <SmallLink>Careers</SmallLink>}
                { showTheCompany && <SmallLink>Legal</SmallLink>}
                { showTheCompany && <SmallLink>Privacy & Cookies</SmallLink>}
                { showTheCompany && <SmallLink>Corporate Information</SmallLink>}
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3 pl-3">
                    <Button preset="transparent">Find Us On</Button>
                    <button onClick={findUsOnHandler}>
                        { showFindUsOn ? <MinusSmIcon className="w-4 items-center"/> : <PlusSmIcon className="w-4 items-center" /> }
                    </button>
                </div>
                {/* FIND US ON ATTRIBUTES */}
                { showFindUsOn && <SmallLink>Facebook</SmallLink>}
                { showFindUsOn && <SmallLink>Twitter</SmallLink>}
                { showFindUsOn && <SmallLink>Instagram</SmallLink>}
                { showFindUsOn && <SmallLink>YouTube</SmallLink>}
                { showFindUsOn && <SmallLink>Exfesyen Podcast</SmallLink>}
                { showFindUsOn && <SmallLink>Pinterest</SmallLink>}
                { showFindUsOn && <SmallLink>Snapchat</SmallLink>}
                <div className="flex justify-between border-b-1 w-11/12 flex justify-start py-3 pl-3">
                    <Button preset="transparent">Sign Up For Exfes Updates</Button>
                    <button onClick={signUpHandler}>
                        { showSignUp ? <MinusSmIcon className="w-4 items-center"/> : <PlusSmIcon className="w-4 items-center" /> }
                    </button>
                </div>
                { showSignUp && <EnteringEmailAddress/>}
                <p className="text-xs pt-6 pb-6">© 2022 Exfesyen - All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile;