'use client'
import React from 'react'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import FormCard from './ui/card/FormCard'

type Props = {}

const Contact = (props: Props) => {

    return (
        <div id='contact' className='contact relative mt-52 '>
            <div className='flex flex-row'>
                <div>
                    <div className='flex flex-row ml-48 mt-32'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row text-4xl gap-2 font-medium'>
                                <h1 className='text-gray-800'>Let's</h1>
                                <h1 className='text-orange-500'>Connect</h1>
                                <h1 className=''>&</h1>
                            </div>
                            <h1 className='text-4xl font-medium mt-2 text-orange-500' >Collaborate</h1>
                            <p className='mt-5 w-[400px] text-start text-gray-500 font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur. </p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-48'>
                        <div className='flex flex-row mt-8'>
                            <Button variant='secondary' className='rounded-full h-12 w-12 bg-gray-100 pointer-events-none'>
                                <FontAwesomeIcon icon={faPhone} className='text-orange-500 h-5' />
                            </Button>
                            <p className='mt-3 ml-5 text-gray-500'>+977 9818602754</p>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <Button variant='secondary' className='rounded-full h-12 w-12 bg-gray-100 pointer-events-none'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-orange-500 h-5' />
                            </Button>
                            <p className='mt-3 ml-5 text-gray-500'>amrit.karki2073@gmail.com</p>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <Button variant='secondary' className='rounded-full h-12 w-12 bg-gray-100 pointer-events-none'>
                                <FontAwesomeIcon icon={faCodeBranch} className='text-orange-500 h-5' />
                            </Button>
                            <p className='mt-3 ml-5 text-gray-500'>github.com/karkiamrit3</p>
                        </div>
                        <div className='flex flex-row mt-5'>
                            <Button variant='secondary' className='rounded-full h-12 w-12 bg-gray-100 pointer-events-none'>
                                <FontAwesomeIcon icon={faLocationDot} className='text-orange-500 h-5' />
                            </Button>
                            <p className='mt-3 ml-5 text-gray-500'>Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
                <div className='ml-[70px] bg-customlightGray w-[700px] rounded-[40px] bg-opacity-5'>
                    <FormCard />
                </div>
            </div>



        </div>


    )
}

export default Contact
