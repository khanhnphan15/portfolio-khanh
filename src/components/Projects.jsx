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
                You will find a curated collection of my recent undertakings.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem 
                    title='Hangman' 
                    img={Project1Img} 
                    technique='Javascript' 
                    link='https://khanhnphan15.github.io/project1-hangman-game' 
                />
                <ProjectItem 
                    title='Streamline-HR' 
                    img={Project2Img} 
                    technique='Express js' 
                    link='https://antelope-coveralls.cyclic.app/login'
                />
                <ProjectItem 
                    title='Music Box' 
                    img={Project3Img} 
                    technique='React Js' 
                    link='https://music-box-khanhking.onrender.com' // replace with actual link
                />
                <ProjectItem 
                title='Nota-Nobile' 
                img={Project4Img} 
                technique='Python' 
                link='https://notanobilekhanh.fly.dev'
            />
            
            </div>
        </div>
    )
}

export default Projects;
