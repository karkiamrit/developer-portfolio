import React from "react"
import CustomButtonGroup from "../jointbutton"
import { Separator } from "../separator"
import Link from "next/link"
import Image from "next/image"
import SocialMediaIcon from "../icons/SocialMediaIcon"
import { faHashtag, faVideo, faShareNodes, faUsers, faRetweet, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = () => {
    return (
        <div className="services rounded-t-[56px] h-full bg-customGray mt-[127px]">
            <div className="flex flex-col ml-48 max-w-1150">
                <div className="flex flex-row">
                    <div className="flex flex-row gap-4 mt-20 text-5xl">
                        <h1 className="text-gray-100">Let's</h1>
                        <h1 className="text-orange-500">Connect</h1>
                        <h1 className="text-gray-100">there</h1>

                    </div>
                    <div className="mt-10 ml-12">
                        <CustomButtonGroup mainbuttonColor="white" subbuttonColor="#3D3F3C" iconTextColor={"white"} content="View All My Work" />
                    </div>
                </div>
                <Separator className="mt-10 w-[1150px] bg-customlightGray h-[2px]" />
                <div className="flex flex-row">
                    <div className="flex flex-col gap-4 mt-10">
                        <div className="flex flex-row gap-4">
                            <Image src="/images/navigation/logo.png" alt="Logo" width={50} height={50} />
                            <h1 className="text-white mt-5 hover:text-orange-600 bottom-2 left-10 hidden lg:block text-3xl font-serif">mrit</h1>
                        </div>
                        <p className="relative w-96 mt-5 text-gray-400 font-normal ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto similique officiis tempora placeat eaque veritatis?
                        </p>
                    </div>
                    <div className="flex flex-col mt-12 ml-12 ">
                        <h2 className="text-orange-600 text-xl">Navigation</h2>
                        <Link href="/"className="mt-5 text-gray-300 text-medium">Home</Link>
                        <Link href="/about"className="mt-5 text-gray-300 text-medium">About Me</Link>
                        <Link href="/service"className="mt-5 text-gray-300 text-medium">Services</Link>
                        <Link href="/about"className="mt-5 text-gray-300 text-medium">Portfolio</Link>
                        <Link href="/resume"className="mt-5 text-gray-300 text-medium">Resume</Link>
                        <Link href="/contact"className="mt-5 text-gray-300 text-medium">Contact Me</Link>
                    </div>
                    <div className="flex flex-col mt-12 ml-16 ">
                        <h2 className="text-orange-600 text-xl">Contact</h2>
                        <p className="mt-5 text-gray-300 text-medium">+977 9818602754</p>
                        <p className="mt-5 text-gray-300 text-medium">amrit.karki2073@gmail.com</p>
                        <p className="mt-5 text-gray-300 text-medium">Khadkagaun, Kalanki</p>
                        <p className=" text-gray-300 text-medium">Kathmandu, Nepal</p>
                    </div>
                    <div className="flex flex-col mt-12 ml-[56px] ">
                        <h2 className="text-orange-600 text-xl">Get the latest information</h2>
                        <Input placeholder="Email Address" className="mt-4 w-72 bg-gray-50 h-10 rounded-xl">
                        </Input>
                        <Button className="absolute ml-[242px] rounded-r-xl rounded-l-none h-10 mt-[44px] bg-orange-600">
                            <FontAwesomeIcon icon={faPaperPlane} className=" text-gray-100"/>
                        </Button>
                        
                    </div>
                </div>
                <div className="absolute flex flex-row mt-[420px] gap-2">
                    <SocialMediaIcon icon={faHashtag}/>
                    <SocialMediaIcon icon={faRetweet}/>
                    <SocialMediaIcon icon={faShareNodes}/>
                    <SocialMediaIcon icon={faUsers}/>
                    <SocialMediaIcon icon={faVideo}/>
                </div>

            </div>
            <Separator className="mt-10 w-[1160px] bg-customlightGray h-[2px] ml-48" />
            <div className="flex flex-row pb-10">
                <h2 className="text-gray-300 ml-48 mt-10 flex flex-row gap-2">Copyright © 2023 <p className="text-orange-500">Amrit.</p> All Rights Reserved.</h2>
                <p className="text-gray-300 ml-[510px] mt-10">User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer