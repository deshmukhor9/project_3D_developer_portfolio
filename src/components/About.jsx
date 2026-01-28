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
  className="flex flex-col md:flex-row md:items-end md:gap-10 mt-[-250px] md:mt-[-240px]"
>
  <div>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </div>

  {/* View Resume Button - Positioned in Front */}
  <button 
    onClick={() => navigate("/resume")} 
    className="bg-gray-300 text-black text-xl px-8 py-3 rounded-lg shadow-md 
               hover:bg-gray-500 hover:text-white transition-all 
               mt-4 md:mt-0 md:mb-4 md:ml-10 md:w-auto"
  >
    View Resume
  </button>
</motion.div>

  {/* Paragraph Content */}
<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 mt-4
             opacity-0 animate-fadeIn w-full md:w-[80%] md:text-justify"
>
  <br />
  👋 <span className="font-semibold text-gray-200">Hi there! </span>  
  I'm <span className="font-bold text-gray-300">Omkar Deshmukh</span>, a 
  <span className="text-yellow-400"> Data Engineering graduate</span> with hands-on experience in designing 
  <span className="text-green-400"> production-grade, metadata-driven data pipelines</span> using 
  <span className="text-blue-400"> Microsoft Fabric</span>. I have a strong foundation in  
  <span className="text-purple-400"> ETL/ELT workflows</span>,  
  <span className="text-blue-400"> Lakehouse architecture</span>, and 
  <span className="text-green-400"> data warehousing</span>. I enjoy building scalable, governed data platforms that support real-world business decisions. 🚀

  <br /><br />
  🎓 <span className="font-semibold text-gray-200">Education:</span>  
  <span className="text-gray-300"> B.Tech in Computer Science Engineering ’25</span>  
  <span className="font-medium text-gray-300"> | CGPA: </span> 
  <span className="font-bold text-gray-300">8.64</span>
  <span className="font-medium text-gray-300"> | Honors AIML: </span>
  <span className="font-bold text-gray-300">A+</span>

  <br /><br />
  📍 <span className="text-gray-300">Maharashtra Institute of Technology, Chh. Sambhajinagar</span>

  <br /><br />
  🚀 <span className="font-semibold text-gray-200">Core Expertise:</span>  
  <span className="text-yellow-400"> Data Engineering</span>,  
  <span className="text-blue-400"> PySpark</span>,  
  <span className="text-purple-400"> SQL</span>,  
  <span className="text-green-400"> Azure Data Services</span>,  
  <span className="text-pink-400"> CI/CD pipelines</span>, and  
  <span className="text-blue-400"> Power BI</span>.

  <br /><br />
  ⚡ <span className="font-semibold text-gray-200">Fun Fact: </span>  
  I love transforming  
  <span className="text-pink-400"> raw data</span> into  
  <span className="text-purple-400"> clean, reliable datasets</span> and building  
  <span className="text-green-400"> scalable systems that make a real impact 🚀</span>
</motion.p>


    {/* Services Section */}
    {/* <div className='mt-10 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div> */}
  </>
  );
};

export default SectionWrapper(About, "about");
