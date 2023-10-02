"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const NavBar = () => {
    const NavLinks = ["/", "/about", "/contact", "/portfolio"];
    const linkTexts = ["Home", "About", "Contact", "Portfolio"];

    return (
        <div className="sticky top-0 flex flex-row z-50 text-white bg-customGray h-16 lg:h-20">
            <div className="absolute lg:left-48 left-12 items-start pt-3 lg:pt-5">
                <Link href="/about">
                <Image src="/images/navigation/logo.png" alt="Logo" width={30} height={30} />
                <h1 className="absolute hover:text-orange-600 bottom-2 left-10 hidden lg:block text-2xl font-serif">mrit</h1>
                </Link>
            </div>
            <div className="lg:flex lg:flex-row lg:w-full lg:justify-center hidden">
                <div className="flex translate-y-1/3 gap-x-12">
                    {NavLinks.map((href, index) => (
                        <Link key={index} href={href} className="hover:text-orange-600">
                            {linkTexts[index]}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="lg:hidden flex flex-row justify-end w-full pr-16">
                <DropdownMenu>
                    <DropdownMenuTrigger><FontAwesomeIcon icon={faBars} spin className="text-orange-600 h-7 hover:text-opacity-80 border-none"/></DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-center bg-customlightGray text-white">
                        <DropdownMenuLabel>Hello There!</DropdownMenuLabel>
                        <DropdownMenuSeparator className="w-full h-px bg-white my-2" /> 
                            {NavLinks.map((navLink,index)=>(
                             <Link key={index} href={navLink} className="w-full rounded-3xl">
                            <DropdownMenuItem key={navLink} className="justify-center w-full">
                                {linkTexts[index]}
                            </DropdownMenuItem>
                            </Link>   
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="absolute right-36 pt-3 lg:pt-5 hidden lg:block">
                <Button className="flex items-center justify-center rounded-2xl bg-orange-600 w-36 h-10 " asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    );
};

export default NavBar;
