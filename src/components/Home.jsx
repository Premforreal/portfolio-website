import React from "react";
import svg from '../assets/svg/Handcoding.svg';

import Typewriter from "typewriter-effect";

function Home({checked}){



  return (
    <div
      name="home"
      className={`h-screen w-full  md : pb-36 
      ${checked ? 'bg-lightgrey text-white' : 'bg-wooden text-lightgrey' }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
          <div className="pt-20 md:pt-0">
              <h2 className="text-3xl sm:text-5xl font-bold"> Hello, I'm Prem Kumar</h2>
              <p className="text-3xl pt-4"><Typewriter options={
                      {strings: ['Back-end developer','Front-end Developer', 'MERN Stack developer','Python developer'],
                      autoStart: true,
                      loop: true,}}/></p>
          </div> 
          <img src={svg} alt="" className='md:w-1/2 h-3/4 w-1/1'/>
        </div>
    </div>
  );
};

export default Home;
