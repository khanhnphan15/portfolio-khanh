import React from 'react';

const Resume = () => {
    return (
        <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Submit Resume
            </h1>
            <form action='https://getform.io/f/335fd48c-20fe-4cf9-9fdd-acb21faca4f7' method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Upload Resume</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='file' name='resume' />
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                    Upload
                </button>
            </form>
        </div>
    )
}

export default Resume;
