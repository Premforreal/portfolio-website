import React from "react";
import angular from "../assets/angular.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import aws from "../assets/aws.png";
import typescript from "../assets/typescript.png";
import jamstack from "../assets/jamstack.png";
import azure from "../assets/azuredevops.png";
import loopback from "../assets/loopback4.svg";

const Experience = ({checked}) => {
  const techs = [
    {
      id: 1,
      src: angular,
      title: "Angular",
      style: "shadow-angular",
    },
    {
      id: 2,
      src: loopback,
      title: "LoopBack 4",
      style: "shadow-loopback",
    },
    {
      id: 3,
      src: nodejs,
      title: "Node.js",
      style: "shadow-node",
    },
    {
      id: 4,
      src: jamstack,
      title: "Jamstack",
      style: "shadow-jamstack",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-typescript",
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-mongodb",
    },
    {
      id: 7,
      src: aws,
      title: "AWS",
      style: "shadow-aws",
    },
    {
      id: 8,
      src: azure,
      title: "Azure DevOps",
      style: "shadow-azure",
    },
  ];

  return (
    <div name="experience" className="w-full h-screen bg-lightgrey">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 px-12 sm:px-0">I have a good experience of below technologies and languages.</p>
        </div>

        <div className="w-full  grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-1 px-12 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg 
              ${style} ${checked ? 'bg-lightgrey text-white' : 'bg-lightgrey text-white'}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
