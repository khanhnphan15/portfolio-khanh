import React from 'react';

const Resume = () => {
    const openResumeInNewTab = () => {
        window.open('https://projects-6-5.s3.us-east-2.amazonaws.com/resume/Khanh-Resume+(3).pdf'); 
    };

    return (
        <div id='resume' className="flex justify-center items-center" style={{ height: '80vh' }}>
            <div className="max-w-[1040px] flex flex-wrap md:pl-20 p-4 py-16">
                <div className="w-full lg:w-1/2 leading-loose">
                    <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-4">Resume</h1>
                    <button onClick={openResumeInNewTab} className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg flex justify-center'style={{ width: 'max-content'}}>
                        Open Resume
                    </button>
                </div>
                
                <div className="w-full lg:w-1/2">
                    {/* Any additional content or components can go here, as per your design */}
                </div>
            </div>
        </div>
    )
}

export default Resume;
