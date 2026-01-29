import React from "react";
import { styles } from "../styles";
import { linkedin } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-tertiary p-4 rounded-2xl w-full sm:max-w-[360px]">
      {/* Image */}
      <div
        className="relative w-full h-[200px] overflow-hidden rounded-2xl cursor-pointer"
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* LinkedIn Icon */}
        <div className="absolute top-3 right-3">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin}
              alt="source code"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3
          className="text-white font-bold text-[18px] cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[28px]">
          Following projects showcases my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          LinkedIn posts and live demos in it.
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
