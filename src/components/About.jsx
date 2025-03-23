import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust breakpoint as needed
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => setIsMobile(event.matches);
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);
  const handleViewResume = () => {
    window.open("../../public/Omkar_Deshmukh_Resume.pdf", "_blank");
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={styles.sectionDetailText}
      >
I'm Omkar Deshmukh, a passionate Web and App Developer dedicated to building scalable, user-friendly digital experiences. <br/>
With expertise in React.js, Next.js, React Native, and Firebase, I specialize in crafting responsive websites and cross-platform mobile applications. <br/>
I enjoy solving real-world problems through code and have experience developing full-stack applications, chat apps, and data-driven dashboards. <br/>
Always eager to learn and adapt, I strive to create seamless, interactive, and efficient solutions.<br/>
Let’s build something amazing together!
      </motion.p>

{/* View Resume Button */}
<div
  className={`z-10 ${
    isMobile
      ? "static flex justify-center mt-5 w-full"
      : "absolute right-32 top-72"
  }`}
>
  <button 
    onClick={handleViewResume} 
    className="bg-[#915eff] text-white text-xl  px-8 py-4 rounded-lg shadow-md hover:bg-[#09dbf8] hover:text-black transition-all w-full md:w-auto"
  >
    View Resume
  </button>
</div>



      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
