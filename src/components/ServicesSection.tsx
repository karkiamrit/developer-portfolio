import React from "react"
import { Crimson_Text } from "next/font/google"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons" 
const crimson = Crimson_Text({ subsets: ["latin"], weight: "400" })
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

function ServicesSection() {
  return (
    <div className={crimson.className}>
      <div className="services rounded-[56px] h-[1800px] xl:h-[800px] bg-customGray xl:mt-[127px] mt-14">
        <div className="flex flex-row justify-center xl:ml-32  h-full xl:pt-32 pt-16 ">
          <h1 className="text-5xl text-white">My</h1>
          <h1 className="float-right ml-5 text-5xl text-red-500"> Services</h1>
          <p className="hidden xl:block xl:w-96 xl:text-gray-300 xl:ml-[520px] xl:font-sans xl:font-normal">Lorem ipsum dolor sit amet consectetur itss adipisicing elit. Velit accusantium sunt facilis.</p>

        </div>
        <div className="border-t border-gray-500 w-full xl:w-[1160px] xl:ml-48 xl:-mt-[580px] -mt-[1640px]" />

        <div className="flex xl:flex-row items-center flex-col gap-5">
          <Card className="relative rounded-3xl w-[370px] xl:ml-48 mt-16 bg-customlightGray border-none transform transition-transform hover:scale-105 focus:scale-105">
            <CardHeader>
              <CardTitle className="flex flex-row mb-2 mt-7 text-orange-600 text-4xl font-medium h-12">
                  Frontend
                  <Button className="rounded-full h-14 w-14 ml-36 -mt-3 bg-gray-300 bg-opacity-10">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white h-6 transform -rotate-45"/>
                  </Button>
              </CardTitle>
              <DropdownMenuSeparator className="mt-2 bg-gray-500" />
              <CardDescription className="pt-4 font-sans text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore das fonte me kivie blonge this.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="frontend" width={700} height={100} src="/images/services/frontend.jpg" className="rounded-2xl"/>
            </CardContent>
          </Card>
          <Card className="relative rounded-3xl w-[370px] mt-16 bg-orange-600 border-none transform transition-transform hover:scale-105 focus:scale-105">
            <CardHeader>
              <CardTitle className="flex flex-row mb-2 mt-7 text-gray-200 text-4xl font-medium h-12">
                  Backend
                  <Button className="rounded-full h-14 w-14 ml-36 -mt-3 bg-gray-300 bg-opacity-10">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white h-6 transform -rotate-45"/>
                  </Button>
              </CardTitle>
              <DropdownMenuSeparator className="mt-2 bg-gray-500" />
              <CardDescription className="pt-4 font-sans text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore das fonte me kivie blonge this.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="backend" width={700} height={100} src="/images/services/backend.jpg" className="rounded-2xl"/>
            </CardContent>
          </Card>
          <Card className="relative rounded-3xl w-[370px] mt-16 bg-customlightGray border-none transform transition-transform hover:scale-105 focus:scale-105">
            <CardHeader>
              <CardTitle className="flex flex-row mb-2 mt-7 text-orange-600 text-4xl font-medium h-12">
                  Cloud
                  <Button className="rounded-full h-14 w-14 ml-44 -mt-3 bg-gray-300 bg-opacity-10">
                    <FontAwesomeIcon icon={faArrowRight} className="text-white h-6 transform -rotate-45"/>
                  </Button>
              </CardTitle>
              <DropdownMenuSeparator className="mt-2 bg-gray-500" />
              <CardDescription className="pt-4 font-sans text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore das fonte me kivie blonge this.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image alt="frontend" width={700} height={100} src="/images/services/cloudcomputing.jpg" className="rounded-2xl"/>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection