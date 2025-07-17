"use client"
import {BiCaretLeft} from "react-icons/bi";
import {useEffect, useState} from "react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`absolute transition-transform right-0 flex flex-row gap-8 ${!isOpen ? "translate-x-55" : ""}`}>
            <div className={"flex-1 flex justify-center px-8 cursor-pointer border-r-2 flex-col border-[#6a6a6a] "}
                 onClick={() => setIsOpen(val => !val)}>
                <BiCaretLeft color={"#6a6a6a"} size={32}/>
            </div>
            <nav className={"flex text-xl gap-2 pr-8 sm:pr-16 text-right text-neutral-500 flex-col"}>
                <p className={"text-white"}>home</p>
                <p>portfolio</p>
                <p>blog</p>
                <p>about me</p>
                <p className={"pt-1"}>buy a coffee</p>
            </nav>
        </div>

    );
};