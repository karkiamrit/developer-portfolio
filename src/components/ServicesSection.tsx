import React from 'react'
import { Crimson_Text } from 'next/font/google'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons' 
const crimson = Crimson_Text({ subsets: ['latin'], weight: "400" })
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}


function ServicesSection({ }: Props) {
  return (
    <div className={crimson.className}>
      <div className='services rounded-[56px] h-[700px] bg-customGray mt-[127px]'>
        <div className='flex flex-row ml-48 h-full pt-32 '>
          <h1 className='text-5xl text-white'>My</h1>
          <h1 className='float-right ml-5 text-5xl text-red-500'> Services</h1>
          <p className='w-96 text-gray-300 ml-[520px] font-sans font-normal'>Lorem ipsum dolor sit amet consectetur itss adipisicing elit. Velit accusantium sunt facilis.</p>

        </div>
        <div className="border-t border-gray-500 w-[1160px] ml-48 -mt-[480px]" />

        <div className=''>
          <Card className=' w-96 ml-48 mt-16 bg-customlightGray border-none'>
            <CardHeader>
              <CardTitle className='flex flex-row mb-2 mt-7 text-orange-600 text-4xl font-medium h-12'>
                  Frontend
                  <Button className='rounded-full h-14 w-14 ml-36 -mt-3 bg-gray-300 bg-opacity-10'>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white h-6 transform -rotate-45'/>
                  </Button>
              </CardTitle>
              <DropdownMenuSeparator className='mt-2 bg-gray-500' />
              <CardDescription className='pt-4 font-sans text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore das fonte me kivie blonge this.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection