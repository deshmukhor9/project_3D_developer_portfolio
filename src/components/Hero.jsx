import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { PhotoCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-0'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

<div className="flex items-center gap-6">
   {/* Text Section */}
<div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hi, I'm <span className='text-[#915EFF]'>Omkar</span>
    </h1>
    <p className={`${styles.heroSubText} mt-4 text-white-100`}>
      A Computer Science Engineering Graduate<br className='sm:block hidden' />
      and Red Hat Certified System Administrator.<br className='sm:block hidden' />
      Passionate about data, code, and building <br className='sm:block hidden' /> smart solutions.<br className='sm:block hidden' />

    </p>
 
  </div>

</div>
  {/* Profile Image */}

      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <ComputersCanvas />
      <PhotoCanvas/>
      </div>

    </section>
  );
};

export default Hero;
