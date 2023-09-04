import React from "react";
import ProjectItem from './ProjectItem';
import Project1Img from '../assets/Project1.jpg';


const Projects = () => {
    return
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20'>
        <h1 className="text-4xl font-bold text-center text-[#001b5e">Projects</h1>
        <p className="text-cebter py-8">
            hhhhhhhhhhh
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={Project1Imgroject1Img} title=''/>
            <ProjectItem img={Project1Imgroject2Img} title=''/>
            <ProjectItem img={Project1Imgroject3Img} title=''/>
            
        </div>
    </div>

}
export default Projects