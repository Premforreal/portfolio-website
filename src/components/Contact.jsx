import React from "react";
import {FaCode } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = ({checked}) => {
  const links = [
    {
      id: 1,
      child: (<FaLinkedin size={30}  />),
      href: "https://linkedin.com/in/premforreal",
      style:'hover:text-linkedin'
    },
    {
      id: 2,
      child: (<FaGithub size={30} />),
      href: "https://github.com/Premforreal",
      style:'hover:text-black'
    },
    {
      id: 3,
      child: (<HiOutlineMail size={30} />),
      href: "mailto:premalakuntah@gmail.com",
      style:'hover:text-black '
    },
  ];


  return (
        <footer className="footer p-2 bg-neutral text-neutral-content w-full  md:flex flex-row justify-between ">
              
              <div className="flex flex-row justify-center md:flex  pt-5 pl-10">
                <FaCode className="footer-title 1xl md:text-2xl" />
                <span className="footer-title 1xl md:text-xl">Designed and Developed by Prem Kumar</span>
              </div>

                <div className="flex  justify-center  md:flex flex-row pr-10 visible">
                      <p className="scale-0 md:pt-5 footer-title">Feel free to connect with me</p>
                      <ul className=" flex flex-row mr-10">
                      {links.map(({ id, child, href,style}) => (
                        <li 
                          key={id}
                          className='p-4'
                        >
                          <a
                            href={href}
                            className={`flex  justify-between items-center  w-full ${style}  
                            transition ease-in-out hover:-translate-y-1 hover:scale-110 `}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                </div>
        </footer>
  );
};

export default Contact;
