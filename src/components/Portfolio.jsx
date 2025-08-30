import React from "react";
import sorting from "../assets/portfolio/sorting.png";
import MernGoals from '../assets/portfolio/MernGoals.png'
import mini from "../assets/portfolio/mini.png";
import drum from '../assets/portfolio/drum.png'
import admin from '../assets/portfolio/admin.png'
import pass from '../assets/portfolio/pass.png'
import todo from '../assets/portfolio/todo.png'
import tictactoe from '../assets/portfolio/tictactoe.png'

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
      src: MernGoals,
      title : 'MernGoals',
      demo : 'https://premforreal.github.io/mern-Goals/',
      code : 'https://github.com/Premforreal/mern-Goals#readme',
      stack:[reactsvg,node,express,mongodb,css],
      description : 'A simple CRUD application with user authentication and authorization made with MERN stack. The backend is developed using nodejs, Express and Mongodb as database. The frontend is developed using react.'
    },
    {
      id: 2,
      src: admin,
      title : 'Admin UI',
      demo : 'https://premforreal.github.io/admin-ui/',
      code : 'https://github.com/Premforreal/admin-ui',
      stack:[reactsvg,javascript,css],
      description : "This is a solution for Greektrust coding challenge that I successfully solved. Built a handy interface for admins to view user data from the API provided. Added helpful features like pagination, search, edit and delete user. Achieved 7 badges and an overall rating of 83 percent.",
    },
    {
      id: 3,
      src: tictactoe,
      title : 'Tic Tac Toe',
      demo : 'https://premforreal.github.io/tic-tac-toe-react/',
      code : 'https://github.com/Premforreal/tic-tac-toe-react',
      stack:[reactsvg,javascript,css],
      description : "This project is done using React and CSS. Tic-Tac-Toe is a classic game for two players where each player takes turns marking a grid of 3x3 squares with their X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.",  
    },
    {
      id: 4,
      src: todo,
      title : 'To-do List',
      demo : 'https://premforreal.github.io/react-to-do-list/',
      code : 'https://github.com/Premforreal/react-to-do-list',
      stack:[reactsvg,javascript,css],
      description : "A simple to-do list web app developed using React. It provides simple UI to interact and perform basic operations like add or delete particular to-do and has option to mark as completed.",  
    },
    {
      id: 5,
      src: sorting,
      title : 'Sorting Visualizer',
      demo : 'https://premforreal.github.io/javascript-sorting-visualizer/',
      code : 'https://github.com/Premforreal/javascript-sorting-visualizer',
      stack: [javascript,css,html],
      description : 'A Web Project that helps in  visualizing some of the famous sorting algorithms like Mergesort, Selectionsort, Bubblesort, Insertionsort, Quicksort with variable speed and array size inputs.'
    },
 {
      id: 6,
      src: mini,
      title : 'Front end mini challenges',
      demo : 'https://premforreal.github.io/mini-projects-links/',
      code : 'https://github.com/premforreal/frontend-mini-challenges/',
      stack:  [javascript,css,html],
      description : 'These are a collection of 20 mini projects to sharpen HTML, CSS & JavaScript skills. Learnt DOM manipulation, events, array methods, modern styling and animations using CSS and many more along the course of this project(s)'
    },
    {
      id: 7,
      src: pass,
      title : 'Password strength checker',
      demo : 'https://premforreal.github.io/Password-Strength-Checker/',
      code : 'https://github.com/Premforreal/Password-Strength-Checker',
      stack:  [javascript,css,html],
      description : 'A front-end web app made using Javascript, Html and Css. It analyses the strength of the password. It is important to choose passwords wisely. Check how strong and secure is your password. Improve the strength of your password to stay safe.'
    },
    {
      id: 8,
      src: drum,
      title : 'Drum kit',
      demo : 'https://premforreal.github.io/Drumkit-web-app/',
      code : 'https://github.com/Premforreal/Drumkit-web-app',
      stack:  [javascript,css,html],
      description : 'A front-end web app made using Javascript, Html and Css. It has different keys in the keyboard representing a certain musical instrument. When any of the key is clicked or pressed corresponding drum sound effect, & shows a visual key as feedback for the user.'
    }
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
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-2 sm:px-0 ">
          {portfolios.map(({ id, src, title , description,demo,code,stack, }) => ( 
                    <div key={id} className={`card card-compact w-100 m-0
                                  ${checked ? 'bg-darkmode text-white' : 'bg-lightgrey text-whitesmoke' }`}>
                            
                            <figure className="p-2 pb-0 hover:shadow-2xl hover:scale-105 duration-200">
                              <img src={src} alt={title} className="rounded-xl"/>
                            </figure>
                            <p className="mt-2 md:text-2xl text-center font-bold text-sky-200 ">{title}</p>

                            <div className="flex center justify-center scale-75 md:scale-100">
                              {stack.map(item=>(<div className="avatar m-4 ">
                                                  <div className="w-10 rounded-full">
                                                    <img src={item} alt="" />
                                                  </div>
                                                </div>
                                              ))}
                            </div>
                            <div className="m-8 mt-0">
                                <p>{description}</p>
                            </div>
                            <div className="flex items-center justify-center space-x-8 pb-2">              
                              <a href={demo} target="_blank" rel="noreferrer ">
                                <button className="btn btn-outline text-whitesmoke ">Demo</button>
                              </a>
                              <a href={code} target="_blank" rel="noreferrer">
                                <button className="btn btn-outline text-whitesmoke ">Repo</button>
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
