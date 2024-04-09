

"use client";

import { useContext } from "react";
import { NavContext } from "../_contexts/NavContext";

const LinkNavbar = () => {
    const contextValue = useContext(NavContext); 

    if (!contextValue) {
        throw new Error(
            "NavProvider not found. Make sure it wraps your component tree.",
        );
    }

    const { activeLinkId } = contextValue;
    const navlinks = ["Academics", "Exams", "Money", "Profile"];

    const renderNavLink = (content: string) => {
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNav = () => {
            document
                .getElementById(scrollToId)
                ?.scrollIntoView({ behavior: "smooth" });
        };

        return (
            <ul className="" key={content}>
                <li>
                    <button
                        className={`${
                            activeLinkId === content
                                ? "border-b-2 border-black"
                                : "" // Apply underline when activeLinkId matches content
                        } hover:border-b-2 hover:border-black focus:outline-none`}
                        onClick={handleClickNav}
                    >
                        {content}
                    </button>
                </li>
            </ul>
        );
    };

    return (
        <div>
            <div>
                <nav className="mx-5 flex gap-7 md:mx-5 md:gap-32">
                    {navlinks.map(nav => renderNavLink(nav))}
                </nav>
            </div>
        </div>
    );
};

export default LinkNavbar;
