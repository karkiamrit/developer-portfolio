import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./button"; // Import your Button component here

type Props={
    content:string
    mainbuttonColor:string
    subbuttonColor:string
    iconTextColor:string
    
}
const CustomButtonGroup = (props:Props) => {
  return (
    <div className="relative flex flex-row xl:justify-start">
      <Button size="xl" variant={"outline"} style={{backgroundColor:props.mainbuttonColor}} className= "ml-96 rounded-full h-12 mt-10 flex flex-row w-24">
            <FontAwesomeIcon style={{color:props.iconTextColor}} icon={faArrowRightLong} className=" z-20 mr-[22px] h-7 w-7 transform -ml-6 -rotate-45 "/>  
      </Button>
      <Button style={{backgroundColor:props.subbuttonColor}} className="absolute ml-[390px] rounded-full h-10 w-10 mt-[45px] pointer-events-none "/>
      <Button size="xl" variant={"outline"} className="rounded-full -ml-10 bg-orange-600 hover:bg-orange-500 font-sans hover:text-white h-12 text-xl mt-10 flex flex-row text-white">
        {props.content}
      </Button>
    </div>
  );
};

export default CustomButtonGroup;