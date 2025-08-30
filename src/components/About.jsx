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
                              <p className="pt-4 pb-4 text-2xl">Hi 👋</p>
                              I'm Prem Kumar. I am an undergraduate student from NIT Warangal, India. <br/>
                              I have always fascinated about technology ever since I was a kid and  
                              learning programming has helped me to appreciate it even more. <br/>
                              I'm fluent in Python and JavaScript.
                              My field of interests lie in both front-end and back-end developement.<br/>
                              I like working with React.js and Node.js. I am always keen to explore any new technologies.
                        </p>
                  </div>
                </div>
                <img src={pencilsvg} className='invisible md:visible w-1/3 right-1 absolute'/>
              </div>
      </div>
    </div>
  );
};

export default About;
