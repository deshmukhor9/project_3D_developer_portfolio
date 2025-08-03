import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Title and Subtitle */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Technologies I Use</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-32 h-32" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="mt-2 text-white text-center font-bold ">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
