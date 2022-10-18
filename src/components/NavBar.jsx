import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NavBar = ({ checked, onChangeSomeState }) => {
  
  const links = [
    {
      id:0,
      child:(<input type="checkbox" className="toggle " checked={checked} onClick={onChangeSomeState}/>)
    },
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
    <div className={`flex justify-between items-center w-full h-20 px-4  
                     ${checked ?  'bg-lightgrey text-white' : 'bg-wooden text-lightgrey' }` }>
      <div>
        <h1 className="md:text-5xl  font-signature ml-2">Prem Kumar</h1>
      </div>
              <ul className=" flex flex-row">
                {links.map(({ id, child, href,style}) => (
                  <li 
                    key={id}
                    className='p-2'
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
  );
};

export default NavBar;
