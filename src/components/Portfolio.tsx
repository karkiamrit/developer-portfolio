import React from 'react'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <div className='services rounded-[56px] h-[1100px] bg-customGray mt-[127px]'>
        <div className='flex flex-row ml-48 pt-24'>
            <div className='flex flex-col'>
                <h1 className='text-5xl text-white'>Let's Have a Look at</h1>
                <h1 className='float-right text-5xl text-orange-600 mt-5'> my Portfolio</h1>
               

            </div>

        </div>
    </div>
  )
}

export default Portfolio