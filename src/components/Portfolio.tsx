"use client"
import React from "react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Slider from "react-slick";
import CustomButtonGroup from "./ui/jointbutton";


const Portfolio = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2000,
        nextArrow: <Button />,
        prevArrow: <Button />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  const images = [
    {
      src: "/images/portfolio/slait-demo-gif.gif",
      alt: "portfolio",
    },
    {
      src: "/images/portfolio/foodblog.jpg",
      alt: "investiaa",
    },
    {
      src: "/images/portfolio/portfolio.png",
      alt: "portfolio",
    },
    {
      src: "/images/portfolio/portfolio.png",
      alt: "portfolio",
    },
  ];

  const portfolioitems=["TypeORM", "Tailwind", "NextJS"]

 

  return (
    <div className="services rounded-[56px] h-[1000px] bg-customGray mt-[127px]">
      <div className="flex flex-row ml-48 pt-24">
        <div className="flex flex-col">
          <h1 className="text-5xl text-white">Let"s Have a Look at</h1>
          <h1 className="float-right text-5xl text-orange-600 mt-5"> my Portfolio</h1>
        </div>
        <div>
          <CustomButtonGroup mainbuttonColor="white" subbuttonColor="#3D3F3C" iconTextColor={"white"} content="View All My Work"/>
        </div>
      </div>

      <Slider {...settings}  className="mt-10 ml-16 pl-6" >
          {images.map((image, index) => (
            <div key={index}>
              <Image alt={image.alt} width={580} height={90} src={image.src} className="border-customlightGray h-[400px] rounded-[30px] border-[10px]" />
            </div>
          ))}
        </Slider>

        <div className="flex flex-row justify-center gap-4 ml-12">
                {portfolioitems.map((item,index)=>(
                    <Button key={index} variant={"secondary"} className="rounded-3xl mt-8">{item}</Button>
                ))}
        </div>
        <div className="flex flex-row justify-center mt-10 ml-14 text-white text-3xl">
          <h1>Investiaa- Your Startup Ideas Ideal Platform</h1>
          
          <Button className="rounded-full h-14 w-14 ml-10 -mt-3 bg-orange-600">
            <FontAwesomeIcon icon={faArrowRight} className="text-white h-6 transform -rotate-45"/>
          </Button>

        </div>
       <div className="flex flex-row justify-center items-center mt-4 ml-20">
        <p className="w-[900px] text-gray-300 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti odio cupiditate animi facilis aut reprehenderit doloribus ex, eaque iusto asperiores voluptatibus autem possimus officia unde nihil, sed, ea itaque?
        </p>
       </div> 
      
      {/* <div className="absolute ml-[165px] -mt-[240px] ">
        <Button className="h-14 w-14 z-50 rounded-full border-4 border-customlightGray bg-customGray hover:border-white hover:bg-orange-600" >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white h-6 transform" />
        </Button>
      </div>

      <div className="absolute ml-[90%] -mt-[240px] ">
        <Button className="h-14 w-14 rounded-full border-4 border-customlightGray bg-customGray hover:border-white hover:bg-orange-600">
          <FontAwesomeIcon icon={faArrowRight} className="text-white h-6 transform" />
        </Button>
      </div> */}
    </div>
  );
};

export default Portfolio;
