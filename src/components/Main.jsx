import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaGithubSquare } from 'react-icons/fa'
import ProfileImage from '../assets/IMG-9597.jpg'; // Import the image



const Main = () => {
    return (
        <div id='main'>
            <img
                className='w-full h-screen object-cover object-left -mt-8'
                src="https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
                alt='/'
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center p-[100px]'>
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Khanh King</h1>
                    <div className="flex sm:flex-row flex-col items-center">
                        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
                            <TypeAnimation
                                sequence={[
                                    'Developer',
                                    2000,
                                    'Coder',
                                    3000,

                                ]}
                                wrapper="div"
                                speed={50}
                                cursor={true}
                                style={{ fontSize: '1em', paddingLeft: '5px' }}
                                repeat={Infinity}
                            />
                        </h2>
                        {/* Use the imported image on the right side of the animation */}
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            style={{
                                marginLeft: '1rem',
                                width: '11rem',
                                height: '11rem',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: '17rem',
                                right: '21rem'
                            }}
                        />
                    </div>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://www.facebook.com/your-facebook-link" className='cursor-pointer'>
                            <FaFacebookF size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/khanhking/" className='cursor-pointer'>
                            <FaLinkedinIn size={30} />
                        </a>
                        <a href="https://github.com/khanhnphan15" className='cursor-pointer'>
                            <FaGithubSquare size={30} />
                        </a>
                        <a href="https://www.instagram.com/your-instagram-link" className='cursor-pointer'>
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;






