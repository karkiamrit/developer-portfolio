import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./button"; // Import your Button component here

type Props = {
  content: string;
  mainbuttonColor: string;
  subbuttonColor: string;
  iconTextColor: string;
};

const CustomButtonGroup = (props: Props) => {
  return (
    <div className="relative flex flex-row xl:justify-start justify-center">
      <div
        style={{ backgroundColor: props.mainbuttonColor }}
        className="xl:ml-96 rounded-full h-12 mt-10 flex items-center"
      >
        <Button
          style={{ backgroundColor: props.subbuttonColor }}
          className="rounded-full h-10 w-10 pointer-events-none mr-2 ml-2"
        >
          <FontAwesomeIcon
            style={{ color: props.iconTextColor }}
            icon={faArrowRightLong}
            className="h-7 w-7 transform -rotate-45 "
          />
        </Button>
        <Button
          size="xl"
          variant={"outline"}
          className="rounded-full bg-orange-600 hover:bg-orange-500 font-sans hover:text-white h-12 text-xl flex flex-row justify-center text-white"
        >
          {props.content}
        </Button>
      </div>
    </div>
  );
};

export default CustomButtonGroup;