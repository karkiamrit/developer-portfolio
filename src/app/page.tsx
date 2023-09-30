import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import React from 'react'


type Props = {}

function page({}: Props) {
  return (
    <>
      <HeroSection />
      <ServicesSection/>
      <Experience/>
      <Portfolio/>
    </>
  )
}

export default page