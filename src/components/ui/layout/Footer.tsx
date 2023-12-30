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
        <div className="services rounded-t-[56px] h-full bg-customGray xl:mt-[127px] mt-10 ">
            <div className="flex flex-col xl:ml-48 max-w-1150 w-auto">
                <div className="flex xl:flex-row flex-col">
                    <div className="flex flex-row gap-4 mt-20 xl:text-5xl text-4xl justify-center xl:justify-start">
                        <h1 className="text-gray-100">Let's</h1>
                        <h1 className="text-orange-500">Connect</h1>
                        <h1 className="text-gray-100">there</h1>

                    </div>
                    <div className="xl:mt-10 xl:ml-12 -ml-[270px]">
                        <CustomButtonGroup mainbuttonColor="white" subbuttonColor="#3D3F3C" iconTextColor={"white"} content="View All My Work" />
                    </div>
                </div>
                <Separator className="mt-10 xl:w-[1150px] w-full bg-customlightGray h-[2px]" />
                <div className="flex xl:flex-row flex-col">
                    <div className="flex xl:flex-col flex-row xl:gap-4 gap-2 mt-10 xl:items-start xl:justify-start xl:text-start items-center text-center justify-center pl-8 xl:pl-0">
                        <div className="flex flex-row gap-4">
                            <Image src="/images/navigation/logo.png" alt="Logo" width={50} height={50} />
                            <h1 className="text-white xl:mt-5 hover:text-orange-600 bottom-2 left-10 hidden xl:block text-3xl font-serif">mrit</h1>
                        </div>
                        <p className="relative w-96 xl:mt-5 text-gray-400 font-normal text-start xl:ml-0 ml-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto similique officiis tempora placeat eaque veritatis?
                        </p>
                    </div>
                    <div className="flex flex-col xl:mt-12 xl:ml-12 mt-28 items-center xl:items-start">
                        <h2 className="text-orange-600 text-xl">Navigation</h2>
                        <Link href="/"className="mt-5 text-gray-300 text-medium hover:text-orange-500">Home</Link>
                        <Link href="/about"className="mt-5 text-gray-300 text-medium hover:text-orange-500">About Me</Link>
                        <Link href="/service"className="mt-5 text-gray-300 text-medium hover:text-orange-500">Services</Link>
                        <Link href="/about"className="mt-5 text-gray-300 text-medium hover:text-orange-500">Portfolio</Link>
                        <Link href="/resume"className="mt-5 text-gray-300 text-medium hover:text-orange-500">Resume</Link>
                        <Link href="/contact"className="mt-5 text-gray-300 text-medium hover:text-orange-500">Contact Me</Link>
                    </div>
                    <div className="flex flex-col xl:mt-12 xl:ml-16 mt-10 items-center xl:items-start">
                        <h2 className="text-orange-600 text-xl">Contact</h2>
                        <p className="mt-5 text-gray-300 text-medium">+977 9818602754</p>
                        <p className="mt-5 text-gray-300 text-medium">amrit.karki2073@gmail.com</p>
                        <p className="mt-5 text-gray-300 text-medium">Khadkagaun, Kalanki</p>
                        <p className=" text-gray-300 text-medium">Kathmandu, Nepal</p>
                    </div>
                    <div className="flex flex-col mt-12 xl:ml-[56px] xl:items-start items-center">
                        <h2 className="text-orange-600 text-xl">Get the latest information</h2>
                        <Input placeholder="Email Address" className="mt-4 w-72 bg-gray-50 h-10 rounded-xl">
                        </Input>
                        <Button className="absolute ml-[242px] rounded-r-xl rounded-l-none h-10 mt-[44px] bg-orange-600">
                            <FontAwesomeIcon icon={faPaperPlane} className=" text-gray-100"/>
                        </Button>
                        
                    </div>
                </div>
                <div className="absolute flex flex-row xl:mt-[420px] mt-[380px] gap-2 ml-32 xl:ml-0 pt-2 ">
                    <SocialMediaIcon icon={faHashtag}/>
                    <SocialMediaIcon icon={faRetweet}/>
                    <SocialMediaIcon icon={faShareNodes}/>
                    <SocialMediaIcon icon={faUsers}/>
                    <SocialMediaIcon icon={faVideo}/>
                </div>

            </div>
            <Separator className="mt-10 xl:w-[1160px] w-full bg-customlightGray h-[2px] xl:ml-48" />
            <div className="flex xl:flex-row flex-col pb-10 items-center">
                <h2 className="text-gray-300 xl:ml-48 mt-10 flex flex-row gap-2">Copyright © 2023 <p className="text-orange-500">Amrit.</p> All Rights Reserved.</h2>
                <p className="text-gray-300 xl:ml-[510px] mt-10">User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer