import React from 'react'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Crimson_Text } from 'next/font/google'
const crimson= Crimson_Text({ subsets: ['latin'],weight: "400" })

type Props = {}

function HeroSection({ }: Props) {
    return (
        <div className={crimson.className}>
        <div className="relative hero h-full flex items-center">
            {/* Vertical Lines */}
            {Array.from({ length: 20 }).map((_, index) => (
                <div
                    key={index}
                    className="absolute h-[680px] w-px bg-gray-50 left-10 top-0"
                    style={{ left: `${10 + index * 75}px` }} // Adjust left position
                />
            ))}

            {/* Horizontal Lines */}
            {Array.from({ length: 9 }).map((_, index) => (
                <div
                    key={index}
                    className="absolute h-px w-full bg-gray-50 top-10"
                    style={{ top: `${10 + index * 80}px` }} // Adjust top position
                />
            ))}

            {/*hero section content begins here */}
            <div className="z-10 text-white text-4xl font-bold">
                <div className='relative flex flex-row justify-start text-white'>
                    <Button size="lg" variant={'outline'} className="ml-48 rounded-full border-customGray h-12 text-lg font-sans mt-24 flex flex-row ">
                        Hello!
                    </Button>
                </div>
                <h1 className='text-orange-500 flex flex-row ml-48 mt-10 font-semibold text-6xl'>I'm Amrit,</h1>
                <h2 className='text-customGray flex flex-row ml-48 mt-8 text-5xl'>Full Stack Developer </h2>
                <h2 className='text-customGray flex flex-row ml-48 mt-8 text-5xl'>based in Nepal.</h2>
                <p className='flex flex-row ml-48 mt-8 text-base font-medium font-sans text-gray-500 w-4/12'> 
                    With expertise in Node.js, HTML/CSS, TypeScript, ORM's, React, Next and Databases, I bring a comprehensive skill set to deliver exceptional results.
                </p>
                <div className='relative flex flex-row justify-start text-white'>
                    <Button size="lg" variant={'outline'} className="ml-48 rounded-full bg-customGray border-customGray h-12 text-lg mt-10 flex flex-row w-24 ">
                        <FontAwesomeIcon icon={faCirclePlay} className='h-10 max-h-12 -ml-[36px] text-customGray' style={{color:'white'}}/>
                    </Button>
                    <Button size="lg" variant={'outline'} className="rounded-full z-999 -ml-10 bg-orange-600 hover:bg-orange-500 font-sans hover:text-white h-12 text-lg mt-10 flex flex-row text-white"> View My Portfolio</Button>

                    <Button size="lg" variant={'outline'} className="float-right ml-10 mt-10 rounded-full border-customGray h-12 text-lg font-sans flex flex-row ">
                        Hire Me
                </Button>
                </div> 
                <Image src='/images/hero/profileimg.png' alt='Hero' width={600} height={600} className='absolute right-0 bottom-0 top-20 mr-36' />
              
                
    


            </div>
        </div>
        </div>

    )
}

export default HeroSection