import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import Experience from "@/components/Experience"
import Portfolio from "@/components/Portfolio"
import WorkingProcess from "@/components/WorkingProcess"
import Contact from "@/components/Contact"
import React from "react"


type Props = {}

function page({}: Props) {
  return (
    <>
      <HeroSection />
      <ServicesSection/>
      <Experience/>
      <Portfolio/>
      <WorkingProcess/>
      <Contact/>
      
      
    </>
  )
}

export default page