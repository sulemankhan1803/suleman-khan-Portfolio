import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = () => {

  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ed64421-8d24-4815-920a-dc8eba0b545e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="contact" className="w-full px-[12%] py-10 scroll-mt-28 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark-remove-bg">

      <motion.h4 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className="text-center mb-2 text-lg ovo">Contact with me</motion.h4>

      <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
        className="text-center text-5xl ovo">Get in touch</motion.h2>

      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </motion.p>

      <motion.form 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.9}}
        onSubmit={onSubmit} className="max-w-2xl mx-auto">

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">

            <motion.input 
              initial={{opacity:0, x:-50}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.6, delay:1.1}}
              type="text" name="name" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark-bg dark-border-white-op"/>

            <motion.input 
              initial={{opacity:0, x:50}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.6, delay:1.2}}
              type="email" name="email" placeholder="Enter your email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark-bg dark-border-white-op"/>
        </div>

        <motion.textarea 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6, delay:1.3}}
          name="message" rows="6" placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark-bg dark-border-white-op"></motion.textarea>

        <motion.button 
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
          type="submit" disabled={result === "Sending...."} className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark-hover-bg  dark-border-white-px dark-remove-bg">
        Submit now 
        <Image src={assets.right_arrow_white} alt='Submit Arrow Icon' className="w-4"/></motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
