import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <>
      <HeroSection />
      <ServicesSection/>
    </>
  )
}

export default page