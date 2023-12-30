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
              vertical:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              vertical:true,
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
    <div className="services relative rounded-[56px] h-[1150px] xl:h-[1000px] bg-customGray xl:mt-[127px] mt-14 ">
      <div className="flex xl:flex-row flex-col xl:ml-48 text-center xl:pt-24 pt-14">
        <div className="xl:flex xl:flex-col block xl:text-start gap-2 xl:gap-0 ">
          <h1 className="xl:text-5xl text-3xl text-white">Let's Have a Look at</h1>
          <h1 className="xl:float-right xl:text-5xl text-3xl text-orange-600 xl:mt-5 mt-2"> my Portfolio</h1>
        </div>
        <div className="xl:ml-8 flex justify-center">
          <CustomButtonGroup mainbuttonColor="white" subbuttonColor="#3D3F3C" iconTextColor={"white"} content="View All My Work"/>
        </div>
      </div>

      <div className="overflow-hidden">
        <Slider {...settings}  className="flex flex-row mt-10 xl:ml-16 xl:pl-6 -ml-[60px] w-[600px] xl:w-auto" >
            {images.map((image, index) => (
              <div key={index}>
                <Image alt={image.alt} width={580} height={90} src={image.src} className="border-customlightGray xl:h-[400px] h-[350px] rounded-[30px] border-[10px]" />
              </div>
            ))}
        </Slider>
      </div>


        <div className="flex flex-row justify-center gap-4 xl:ml-12">
                {portfolioitems.map((item,index)=>(
                    <Button key={index} variant={"secondary"} className="rounded-3xl mt-8">{item}</Button>
                ))}
        </div>
        <div className="flex xl:flex-row flex-col justify-center mt-10 xl:ml-14 text-center items-center text-white xl:text-3xl text-2xl pr-4">
          <h1>Investiaa- Your Startup Ideas Ideal Platform</h1>
          
          <Button className="rounded-full h-14 w-14 xl:ml-10 xl:-mt-3 mt-8 bg-orange-600">
            <FontAwesomeIcon icon={faArrowRight} className="text-white h-6 transform -rotate-45"/>
          </Button>

        </div>
       <div className="flex flex-row justify-center items-center mt-4 xl:ml-20">
        <p className="xl:w-[900px] w-full pl-6 pr-6 xl:p-0 text-gray-300 text-center">
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
