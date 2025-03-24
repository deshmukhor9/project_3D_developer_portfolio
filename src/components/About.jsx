import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[200px] xs:w-[250px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-4 px-8 min-h-[180px]  xs:py-5 xs:px-12 xs:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 xs:w-16 xs:h-16 object-contain'
        />

        <h3 className='text-white text-[18px] xs:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust breakpoint as needed
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => setIsMobile(event.matches);
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);
    // const handleViewResume = () => {
    //   window.open("https://drive.google.com/file/d/1h7JXmbfiaWSKQ6xobj7IYeKxN-8mXw-6/view?usp=sharing", "_blank");
    // };
    return(
    <>
    {/* Introduction Section */}
    <motion.div 
  variants={textVariant()} 
  className="flex flex-col md:flex-row md:items-end md:gap-10 mt-[-120px] md:mt-[-240px]"
>
  <div>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </div>

  {/* View Resume Button - Positioned in Front */}
  <button 
    onClick={() => navigate("/resume")} 
    className="bg-[#915eff] text-white text-xl px-8 py-3 rounded-lg shadow-md 
               hover:bg-[#09dbf8] hover:text-black transition-all 
               mt-4 md:mt-0 md:mb-4 md:ml-10 md:w-auto"
  >
    View Resume
  </button>
</motion.div>

  
{/* Paragraph Content */}
{/* Paragraph Content */}
<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 mt-4
             opacity-0 animate-fadeIn w-full md:w-[80%] text-justify"
>
<br/>
  👋 <span className="font-semibold text-gray-200">Hi there! </span>  
  I'm <span className="font-bold text-gray-300">Omkar Deshmukh</span>, a final-year Computer Science Engineering student from Maharashtra, India. Passionate about  
  <span className="text-blue-400"> Full-Stack Development</span>,  
  <span className="text-yellow-400"> AI</span>, and  
  <span className="text-green-400"> Data Science</span>, I love building innovative applications that solve real-world problems. 🚀

  <br /><br />
  🎓 <span className="font-semibold text-gray-200">Education: </span>  
  <span className="text-gray-400">Bachelor’s Degree in Computer Science & Engineering (Ongoing)</span>  
  📍 Maharashtra Institute of Technology, Aurangabad  
  📊 <span className="font-medium text-gray-300">CGPA:</span> 8.59 | 🎓 Graduating: <span className="font-medium text-gray-300">June 2025</span>

  <br /><br />
  🚀 <span className="font-semibold text-gray-200">What I'm Currently Learning: </span>  
  Integrating <span className="text-blue-400">Full-Stack Development</span> with  
  <span className="text-yellow-400"> AI</span> to build intelligent applications.

  <br /><br />
  ⚡ <span className="font-semibold text-gray-200">Fun Fact: </span>  
  I love working on  
  <span className="text-pink-400"> trading strategies</span>,  
  <span className="text-purple-400"> AI-powered chat applications</span>, and  
  <span className="text-green-400"> tech-driven solutions</span> that make life easier! 🚀
</motion.p>


    {/* Services Section */}
    <div className='mt-10 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(About, "about");
