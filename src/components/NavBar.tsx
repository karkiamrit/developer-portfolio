import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='absolute flex flex-row justify-center bg-red-400 w-full h-20 max-h-20'>
        <div className='flex translate-y-1/3 gap-x-14'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/portfolio'>Portfolio</Link>
        </div>    
    </div>
  )
}

export default NavBar