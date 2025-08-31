import React from "react";
import pencilsvg from '../assets/svg/Checklist.svg'

const About = ({checked}) => {
  return (
    <div
      name="about"
      className={`w-full h-screen  text-white ${checked ? 'bg-lightgrey text-white' : 'bg-wooden text-lightgrey' }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-auto">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About Me
              </p>
            </div >
            <div className="flex">
                <div className={`mockup-window border md:w-4/5 drop-shadow-2xl ${checked ? 'bg-lightgrey' : 'bg-lightergrey'}`}>
                  <div className={`flex flex-row absolute top-4 left-4 ${checked ? 'bg-lightgrey' : 'bg-lightergrey'}`}>
                      <div className="rounded-full bg-apple-red w-4 h-4 m-1 "/>
                      <div className="rounded-full bg-apple-yellow w-4 h-4 m-1 "/>
                      <div className="rounded-full bg-apple-green w-4 h-4 m-1"/>
                  </div>
                  <div className={`flex flex-col justify-center px-4 py-4 
                                ${!checked ? 'text-lightgrey bg-whitesmoke' : 'text-white bg-lightergrey'}`}>
                        <p className="font-mono font-semibold text-base text-left pr-8 pl-2 sm:px-0">
                              <p className="pt-4 pb-4 text-2xl">Hi, I'm Prem Kumar.</p>
                              I'm a Full-Stack Developer with two years of professional experience in designing, developing, and deploying high-quality web applications.
                              <br/><br/>
                              My journey in tech, which began at Metapointer Labs, has given me a solid foundation in building solutions from the ground up. I specialize in creating robust backend services with <strong>Node.js</strong> and <strong>LoopBack 4</strong>, and crafting intuitive user interfaces with <strong>Angular</strong>. I'm also experienced in deploying and managing cloud infrastructure on <strong>AWS</strong> and implementing CI/CD pipelines with <strong>Azure DevOps</strong>.
                              <br/><br/>
                              I'm passionate about writing clean, efficient code and I'm always excited to learn new technologies and take on challenging problems. I'm currently looking for a role where I can contribute to impactful projects and continue to grow as a developer.
                        </p>
                  </div>
                </div>
                <img src={pencilsvg} alt="" className='invisible md:visible w-1/3 right-1 absolute'/>
              </div>
      </div>
    </div>
  );
};

export default About;
