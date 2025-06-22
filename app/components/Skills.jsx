import React from "react";
import { skillsData, toolsData, githubicon } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

const Skills = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}} 
      id="skills" className="w-full px-[12%] py-10 scroll-mt-28">

      <motion.h4
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
      className="text-center mb-2 text-lg ovo">What I Know</motion.h4>

      <motion.h2
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className="text-center text-5xl ovo">My Skills</motion.h2>

      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}}
        className="grid grid-cols-auto gap-6 my-10">
        {skillsData.map(({icon, iconDark, title, skills, description}, index)=>(
            <motion.div 
              whileHover={{scale:1.05}}
              key={index} 
              className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer light-hover hover:-translate-y-1 duration-500 hover:dark-shadow dark-hover">
                <Image src={isDarkMode ? iconDark : icon} alt="" className="w-7"/>

                <h3 className="text-lg font-semibold my-4 text-gray-700 dark-text-gray-700">
                  {title}
                </h3>
                <p className="mb-3 text-gray-600 leading-5 dark-bg-white-op">
                  {skills}
                </p>
                <p className="text-gray-600 leading-5 dark-bg-white-op">
                  {description}
                </p>
            </motion.div>
        ))}
      </motion.div>

       <motion.h4 
              initial={{y:20, opacity:0}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:1.3}}
              className="my-6 text-gray-700 ovo dark-bg-white-op">
              Tools I use
            </motion.h4>

            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:1.3}}
            className="flex items-center gap-8 sm:gap-5">
              {toolsData.map((tool, index)=>(
                <motion.li
                whileHover={{scale:1.1}} 
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                 key={index}>
                  <Image src={tool} alt='Tool' className="w-5 sm:w-7"/>
                </motion.li>
              ))}
              {githubicon.map(({icon, iconDark}, index)=>(
                <motion.li
                whileHover={{scale:1.1}} 
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                 key={index}>
                  <Image src={isDarkMode ? iconDark : icon} alt='Tool' className="w-7"/>
                </motion.li>

              ))}
            </motion.ul>

    </motion.div>
  );
};

export default Skills;
