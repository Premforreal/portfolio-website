import React from "react";
import portfolio from "../assets/portfolio/portfolio.png";
import sorting from "../assets/portfolio/sorting.png";
import BestReads from '../assets/portfolio/bestreads.png'
import mini from "../assets/portfolio/mini.png";
import tailwind from '../assets/svg/tailwind.svg';
import reactsvg from '../assets/svg/react.svg';
import node from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import javascript from '../assets/javascript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import express from '../assets/express.png';

const Portfolio = ({checked}) => {
  const portfolios = [
    {
      id: 1,
      src: BestReads,
      title : 'bestreads',
      demo : 'https://premforreal.github.io/bestreads/',
      code : 'https://github.com/Premforreal/bestreads',
      stack:[reactsvg,node,express,mongodb],
      description : 'This is a Goodreads clone with crud functionality made using MERN stack. Users can add, rate or even delete their books. Front-end is made using React, MUI and CSS. Back-end using Node.js, Express and MongoDB.'
    },
    {
      id: 2,
      src: portfolio,
      title : 'Portfolio Website',
      demo : 'https://prem-react-portfolio.netlify.app/',
      code : 'https://github.com/Premforreal/React-portfolio',
      stack:[reactsvg,tailwind],
      description : "This portfolio website you are viewing is made using React.Js and tailwind-css. Click the 'demo' below to view the website or click on 'code' to go to its github repository.",  
    },
    {
      id: 3,
      src: sorting,
      title : 'Sorting Visualizer',
      demo : 'https://premforreal.github.io/javascript-sorting-visualizer/',
      code : 'https://github.com/Premforreal/javascript-sorting-visualizer',
      stack: [javascript,css,html],
      description : 'A Web Project that helps in  visualizing some of the famous sorting algorithms like Mergesort, Selectionsort, Bubblesort, Insertionsort, Quicksort with variable speed and array size inputs.'
    },
 {
      id: 4,
      src: mini,
      title : 'Front end mini challenges',
      demo : 'https://premforreal.github.io/mini-projects-links/',
      code : 'https://github.com/premforreal/frontend-mini-challenges/',
      stack:  [javascript,css,html],
      description : 'These are a collection of 20 mini projects to sharpen HTML, CSS & JavaScript skills. Learnt DOM manipulation, events, array methods, modern styling and animations using CSS and many more along the course of this project(s)'
    },
  ];


  return (
    <div
      name="portfolio"
      className={`w-full text-white md:h-auto   pb-20
                  ${checked ? 'bg-lightgrey text-white' : 'bg-wooden text-lightgrey' }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        <div className="pb-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, title , description,demo,code,stack, }) => ( 
                  
                    <div key={id} className={`card card-compact w-100 m-0
                                      ${checked ? 'bg-darkmode text-white' : 'bg-lightgrey text-whitesmoke' }`}>
                            
                            <figure className="p-2 pb-0 hover:shadow-2xl hover:scale-105 duration-200">
                              <img src={src} alt="Shoes" className="rounded-xl"/>
                            </figure>
                            <p className="mt-2 md:text-2xl text-center font-bold text-sky-200 ">{title}</p>
                            
                            <div className="flex center justify-center scale-75 md:scale-100">
                              {stack.map(item=>(<div className="avatar m-4 mb-2 mt-0">
                                                  <div className="w-10 rounded-full">
                                                    <img src={item} />
                                                  </div>
                                                </div>
                                              ))}
                            </div>

                            <div className="flex items-center justify-center space-x-8 pb-2">              
                              <a href={demo} target="_blank" rel="noreferrer ">
                                <button className="btn btn-outline text-whitesmoke scale-75">Demo</button>
                              </a>
                              <a href={code} target="_blank" rel="noreferrer">
                                <button className="btn btn-outline text-whitesmoke scale-75">Repo</button>
                              </a>
                          </div>
                      </div>
          ))}
        </div> 
         
        </div>
    </div>
  );
};

export default Portfolio;
