import React from 'react';

const Resume = () => {
    const openResumeInNewTab = () => {
        window.open('https://projects-6-5.s3.us-east-2.amazonaws.com/resume/Khanh-Resume+(3).pdf'); // Update this path to your actual resume file
    };

    return (
        <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Resume
            </h1>
            <button onClick={openResumeInNewTab} className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Open Resume
            </button>
        </div>
    )
}

export default Resume;
