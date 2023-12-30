import React from "react"
import { Crimson_Text } from "next/font/google"
const crimson = Crimson_Text({ subsets: ["latin"], weight: "400" })
import { DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Button } from "./ui/button"


const Experience = () => {
    const educations = [
        { name: "Himshikhar Boarding School", duration: "2012-2014", degree: "Bachelor of Engineering in IT" },
        { name: "Kathmandu Model College", duration: "2012-2014", degree: "Bachelor of Engineering in IT" },
        { name: "NCIT", duration: "2012-2014", degree: "Bachelor of Engineering in IT" }
    ];
    const experiences = [
        { name: "Upwork", duration: "2012-2014", role: "Freelance Writer" },
        { name: "Suvaye", duration: "2023-Now", role: "FullStack Developer" },
        { name: "Investia", duration: "2012-2014", role: "Backend Engineer" }
    ];

    return (
        <div className={crimson.className}>
            <div className="relative experience overflow-hidden">
                <div className="hidden xl:flex flex-row items-center justify-center mt-10 text-4xl gap-2">
                    <h1 className="text-gray-900">My</h1>
                    <h1 className="text-orange-600">Education </h1>
                    <h1 className="text-black-900">& </h1>
                    <h1 className="text-orange-600">Work Experience</h1>
                </div>
                <div className="flex xl:flex-row flex-col xl:gap-16 mt-10 xl:mt-0">
                    <div className="relative flex flex-col xl:ml-48 mt-10 text-3xl max-w-[520px]">
                        <h2 className="text-orange-500 text-center xl:text-start">Education</h2>
                        <DropdownMenuSeparator className="xl:w-[510px] sm:w-full bg-gray-300 h-[1.5px]" />
                        {educations.map((education, index) => (
                            <div key={index} className="flex flex-col mt-4 font-serif pl-5 pr-5 xl:p-0">
                                <div className="flex flex-row gap-4 items-center">
                                    <h2 className="font-extralight text-2xl">{education.name}</h2>
                                    <div className="ml-auto"> {/* This div will push the button to the right */}
                                        <Button variant="secondary" className="text-base font-sans text-gray-500 pointer-events-none">
                                            {education.duration}
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-row -mt-1">
                                    <p className="text-gray-500 text-sm font-sans">{education.degree}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative flex flex-col mt-10 text-3xl">
                        <h2 className="text-orange-500 text-center xl:text-start">Work Experience</h2>
                        <DropdownMenuSeparator className="xl:w-[510px] w-full bg-gray-300 h-[1.5px]" />
                        {experiences.map((experience, index) => (
                            <div key={index} className="flex flex-col mt-4 font-serif pl-5 pr-5 xl:p-0">
                                <div className="flex flex-row gap-4 items-center">
                                    <h2 className="font-extralight text-2xl">{experience.name}</h2>
                                    <div className="ml-auto"> {/* This div will push the button to the right */}
                                        <Button variant="secondary" className="text-base font-sans text-gray-500 pointer-events-none">
                                            {experience.duration}
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-row -mt-1">
                                    <p className="text-gray-500 text-sm font-sans">{experience.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience