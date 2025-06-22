import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* <Image src={ isDarkMode? assets.logo_dark: assets.logo} alt="logo"  className="w-36 mx-auto mb-2"/> */}
        <h1 className="outfit font-bold text-2xl cursor-pointer tracking-wide"><span className="text-[#ec1552] text-4xl">S</span>uleman <span className="text-[#ec1552] text-4xl">K</span>han</h1>

        <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6"/>
            sulemankhan1803@gmail.com
        </div>
      </div>
      
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Suleman Khan. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a href="https://github.com/sulemankhan1803" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/mohammedsulemankhan/" target="_blank">Linkedin </a></li>
        </ul>

      </div>
      
    </div>
  )
}

export default Footer
