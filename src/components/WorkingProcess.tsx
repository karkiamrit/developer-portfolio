import React from 'react'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faDatabase, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

type Props = {}

const WorkingProcess = (props: Props) => {
    return (
        <div className='working'>
            <div className='flex flex-row justify-center gap-2 text-4xl mt-10 font-semibold'>
                <h1 className='text-gray-800'>
                    My Working
                </h1>
                <h1 className='text-orange-600'>
                    Process
                </h1>
            </div>
            <div className='flex flex-row gap-4 text-2xl mt-10 font-semibold '>
                <div className='flex flex-col justify-center gap-2 ml-48 '>
                    <Button className='w-16 h-16 ml-36 rounded-full bg-customGray'>
                        <FontAwesomeIcon icon={faLightbulb} fade className='text-3xl w-20'/>
                    </Button>
                    <h2 className='ml-24 mt-2'>Design Strategy</h2>
                    <p className='w-96 text-sm text-gray-500 font-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. quas, alias ipsa corporis eaque officiis sed minima nesciunt cum cumque fugiat minus autem architecto.</p>
                </div>    
                <div className='flex flex-col justify-center gap-2'>
                    <Button className='w-16 h-16 ml-36 rounded-full bg-customGray'>
                        <FontAwesomeIcon icon={faDatabase} fade className='text-3xl w-20'/>
                    </Button>
                    <h2 className='ml-24 mt-2'>Database Design</h2>
                    <p className='w-96 text-sm text-gray-500 font-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. quas, alias ipsa corporis eaque officiis sed minima nesciunt cum cumque fugiat minus autem architecto.</p>
                </div> 
                <div className='flex flex-col justify-center gap-2'>
                    <Button className='w-16 h-16 ml-36 rounded-full bg-customGray'>
                        <FontAwesomeIcon icon={faWandMagicSparkles} fade className='text-3xl w-20'/>
                    </Button>
                    <h2 className='ml-24 mt-2'>Frontend Designs</h2>
                    <p className='w-96 text-sm text-gray-500 font-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. quas, alias ipsa corporis eaque officiis sed minima nesciunt cum cumque fugiat minus autem architecto.</p>
                </div> 
                
            </div> 
            <Image alt='image' width={80} height={300} src='/images/working/right-arrow.png' className='z-20 ml-[540px] -mt-[180px]'/> 
            <Image alt='image' width={80} height={300} src='/images/working/right-arrow.png' className='z-20 ml-[940px] -mt-[80px]'/>   
        </div>
    )
}

export default WorkingProcess