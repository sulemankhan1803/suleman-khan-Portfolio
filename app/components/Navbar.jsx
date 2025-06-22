import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useRef, useEffect, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  
  const [isScroll, setIsScroll] = useState(false)
  const  sideMenuRef = useRef();

  const openMenu = () =>{
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  } 

  const closeMenu = () =>{
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  useEffect(() => {
  const handleScroll = () => {
    setIsScroll(window.scrollY > 50);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <>
    
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark-hidden">
      <Image src={assets.header_bg_color} alt='' className="w-full"/>
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark-theme dark:shadow-white/20": ""}`}>

        <a href="">
          {/* <Image src={isDarkMode ? assets.logo_dark:assets.logo} className='w-28 cursor-pointer mr-14'alt='logo'/> */}
          <h1 className="outfit font-bold text-2xl cursor-pointer tracking-wide"><span className="text-[#ec1552] text-4xl">S</span>uleman <span className="text-[#ec1552] text-4xl">K</span>han</h1>
        </a>

        <ul className={`hidden md:flex gap-6 items-center lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li><a className='ovo' href="#top">Home</a></li>
          <li><a className='ovo' href="#about">About me</a></li>
          <li><a className='ovo' href="#skills">Skills</a></li>
          <li><a className='ovo' href="#projects">Projects</a></li>
          <li><a className='ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={ isDarkMode ? assets.sun_icon:assets.moon_icon} alt='' className='w-6'/>
            </button>

          <a className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ovo dark:border-white/50" href="#contact">Contact
              <Image src={ isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3'alt='arrow icon'/>
          </a>

          <button className='block md:hidden ml-3'><Image src={ isDarkMode ? assets.menu_white :assets.menu_black} alt='' className='w-6' onClick={openMenu}/> </button>
        </div>

        {/* ------------------------------Mobile menu------------------------------------- */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark-bg-menu">

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={ isDarkMode ? assets.close_white:assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li><a className='ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='ovo' onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a className='ovo' onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a className='ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
