import React from 'react'
import { assets, projectsData, moreProjectsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
import { useState } from 'react'


const Projects = ({isDarkMode}) => {

  // const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="projects" className="w-full px-[12%] py-10 scroll-mt-28">

      <motion.h4 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className="text-center mb-2 text-lg ovo">Featured Projects</motion.h4>

      <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
        className="text-center text-5xl ovo">What I’ve Built</motion.h2>

      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo">
        {/* Explore my collection of full-stack projects crafted with React, Node.js, Express, and modern databases. These works reflect my problem-solving mindset and UI development skills. */}

         Explore a collection of web applications I've built using modern technologies like React, Node.js, Express, and MongoDB/MySQL. Each project demonstrates my skills in building responsive UIs, scalable backends, and smooth user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-auto gap-5 my-10">

        {projectsData.map(({title, skills, bgImage, link}, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-md overflow-hidden dark-bg-work">

          <div className="relative w-full h-52">
            <Image src={bgImage} alt={title} fill className="object-cover"/>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semiboldmb-1 mb-3">{title}</h2>
            <p className="text-sm mb-3">SKills: {skills}</p>
            <a href={link} target='_blank' className=" text-sm flex items-center hover:text-blue-600 gap-2">Live Site 
            <Image src={ isDarkMode ? assets.right_arrow_bold_dark :assets.right_arrow_bold} alt='Right arrow' className="w-4 "/></a>
          </div>
        </motion.div>
        ))}
      </motion.div>


      {/* {showMore && (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-auto gap-5 my-10">

        {moreProjectsData.map(({title, skills, bgImage, link}, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-md overflow-hidden dark-bg-work">

          <div className="relative w-full h-52">
            <Image src={bgImage} alt={title} fill className="object-cover"/>
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semiboldmb-1 mb-3">{title}</h2>
            <p className="text-sm mb-3">SKills: {skills}</p>

            <a href={link} target='_blank' className=" text-sm flex items-center hover:text-blue-600 gap-2">Live Site 
            <Image src={ isDarkMode ? assets.right_arrow_bold_dark :assets.right_arrow_bold} alt='Right arrow' className="w-4 "/></a>

          </div>
        </motion.div>
        ))}
        </motion.div>
        )}

        <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        onClick={() => setShowMore(prev => !prev)}
        className="w-max flex items-center justify-center gap-2 text-shadow-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 light-hover duration-500 dark-text-white dark-border-white dark-hover-bg">
        {showMore ? 'Show Less' : 'Show More'}
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.button> */}

      
    
    </motion.div>
  );
}

export default Projects
