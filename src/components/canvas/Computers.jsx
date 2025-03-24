import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg mx-auto text-white gap-3 sm:gap-4 sm:mt-20 mt-52 sm:ml-[12%] w-full sm:w-fit ">
      <ContactButton
        href="https://github.com/deshmukhor9"
        bgColor="bg-gray-800"
        hoverColor="hover:bg-gray-700"
        icon={<FaGithub />}
        label="GitHub"
      />
      <ContactButton
        href="https://www.linkedin.com/in/omkar-deshmukh-67911223a/"
        bgColor="bg-blue-600"
        hoverColor="hover:bg-blue-500"
        icon={<FaLinkedin />}
        label="LinkedIn"
      />
      <ContactButton
        href="https://wa.me/918208335054"
        bgColor="bg-green-600"
        hoverColor="hover:bg-green-500"
        icon={<FaWhatsapp />}
        label="WhatsApp"
      />
    </div>
  );
};

// 🆕 Reusable Button Component (Modular & Responsive)
const ContactButton = ({ href, bgColor, hoverColor, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-md transition-all duration-300 transform ${bgColor} ${hoverColor} hover:scale-105 shadow-md w-full sm:w-auto text-sm sm:text-base`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default ContactCard;
