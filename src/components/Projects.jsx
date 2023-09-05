import React from "react";
import ProjectItem from './ProjectItem';
import Project1Img from '../assets/Project1.jpg'; // Import the image
import Project2Img from '../assets/Project2.jpg'; 
import Project3Img from '../assets/Project3.jpg'; 
import Project4Img from '../assets/Project4.jpg'; 
const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20'>
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
                hhhhhhhhhhh
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                {/* Pass the imported image as a prop to ProjectItem */}
                <ProjectItem title='Hangman' img={Project1Img} technique='Javascript' />
                <ProjectItem title='Streamline-HR' img={Project2Img} technique='Express js'/>
                <ProjectItem title='Music Box' img={Project3Img} technique='React Js'/>
                <ProjectItem title='Nota-Nobile' img={Project4Img} technique='Python'/>
            </div>
        </div>
    )
}

export default Projects;
