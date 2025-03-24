import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-32 h-32' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="mt-2 text-sm font-medium text-white text-center">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
