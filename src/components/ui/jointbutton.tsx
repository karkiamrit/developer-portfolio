import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from './button'; // Import your Button component here

type Props={
    content:string
}
const CustomButtonGroup = (props:Props) => {
  return (
    <div className='relative flex flex-row justify-start text-white'>
      <Button size="lg" variant={'outline'} className="ml-96 rounded-full bg-white border-customGray h-12 text-lg mt-10 flex flex-row w-24 ">
            <FontAwesomeIcon icon={faArrowRight} className='text-white h-10 w-10 transform -ml-10 -rotate-45 bg-customGray rounded-full'/>
      </Button>
      <Button size="lg" variant={'outline'} className="rounded-full z-999 -ml-10 bg-orange-600 hover:bg-orange-500 font-sans hover:text-white h-12 text-lg mt-10 flex flex-row text-white">
        {props.content}
      </Button>
    </div>
  );
};

export default CustomButtonGroup;