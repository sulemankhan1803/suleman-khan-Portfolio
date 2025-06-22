import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion, time } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
     id="about" className="w-full px-[12%] py-10 scroll-mt-28">

      <motion.h4 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className="text-center mb-2 text-lg ovo">About</motion.h4>

      <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
        className="text-center text-5xl ovo">Introduction</motion.h2>

      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div 
          initial={{opacity:0, scale:0.9}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.user_image} alt='user' className="w-full rounded-3xl"/>
        </motion.div>

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.8, delay:0.6}} 
          className="flex-1">
          <p className="mb-10 max-w-2xl ovo">
          I am an aspiring Full-Stack Developer with hands-on experience in building responsive and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). With a solid foundation in Java, JavaScript, HTML, and CSS, I enjoy crafting both frontend interfaces and backend logic that work seamlessly together.
          <br />
          I am passionate about clean code, intuitive user experiences, and solving real-world problems through technology. Throughout my projects, I’ve demonstrated my ability to work collaboratively, manage time effectively, and adapt quickly to new tools and technologies.
          <br />
          My strong problem-solving, communication, and teamwork skills help me thrive in both solo and collaborative environments, and I constantly seek opportunities to learn and grow in the fast-evolving tech landscape.
          </p>

              
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:1}} 
            className="grid grid-cols-auto gap-6 max-w-2xl">
              
            {infoList.map(({icon, iconDark, title, description, college},index) => (
              <motion.div
                whileHover={{scale:1.02}}
                className="border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer light-hover hover:-translate-y-1 duration-500 hover:dark-shadow dark-border-white dark-hover" 
                key={index}>
                <Image src={ isDarkMode? iconDark:icon} alt={title} className="w-7 mt-3"/>

                <h3 className="my-4 font-semibold text-xl text-gray-700 dark-text-gray-700">
                  {title}
                </h3>
                <div className="text-gray-600 dark-bg-white-op">
                  <p><strong>{description}</strong></p>
                  <p>{college}</p>
                </div>
               
              </motion.div>
            ))}
            </motion.div>
          
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
