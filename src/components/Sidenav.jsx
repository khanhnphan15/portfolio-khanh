import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    // Logging outside of JSX
    // console.log("Rendering Sidenav Component");

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} style={{ color: 'black' }} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} style={{ color: 'black' }} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} style={{ color: 'black' }} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href="#resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} style={{ color: 'black' }} />
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} style={{ color: 'black' }} />
                            <span className='pl-4'>Contact</span>
                        </a>

                    </div>
                )
                    : (
                        ''
                    )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a onclick= {handleNav} href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a onclick= {handleNav} href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <GrProjects size={20} />
                    </a>
                    <a href="#project" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a onclick= {handleNav} href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <BsPerson size={20} />
                    </a>
                    <a onclick= {handleNav} href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;