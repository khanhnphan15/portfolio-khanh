import React from 'react';

const Contact = () => {
    return (

        <div id='contact' className="w-full leading-loose m-auto md:pl-20 p-4 py-16">

            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Contact Me
            </h1>

            <div className="flex flex-wrap items-start ms-12">
                <form
                    className="w-full lg:w-1/2 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                    action='https://getform.io/f/335fd48c-20fe-4cf9-9fdd-acb21faca4f7'
                    method='POST'
                    encType='multipart/form-data'>

                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">Contact Form</p>

                    <div className="font-general-regular mb-4">
                        <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="name">Full Name</label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            aria-label="Name"
                            required
                        />
                    </div>

                    <div className="font-general-regular mb-4">
                        <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="phone">Phone</label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Your Phone"
                            aria-label="Phone"
                            required
                        />
                    </div>

                    <div className="font-general-regular mb-4">
                        <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="email">Email</label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            aria-label="Email"
                            required
                        />
                    </div>

                    <div className="font-general-regular mb-4">
                        <label className="block text-lg text-primary-dark dark:text-primary-light mb-1" htmlFor="subject">Subject</label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            aria-label="Subject"
                            required
                        />
                    </div>

                    <div className="mt-6">
                        <label className="block text-lg text-primary-dark dark:text-primary-light mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                        ></textarea>
                    </div>

                    <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg text-center'>
                        Send Message
                    </button>

                </form>
                {/* Contact Details */}
                <div className="w-full lg:w-1/2 px-6 flex justify-center ">
                    <div className="text-left max-w-xl">
                        <h2
                            className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mb-8"
                            style={{ marginTop: '40.5px' }}
                        >
                            Contact Details
                        </h2>

                        <ul className="font-general-regular">
                            {/* Address */}
                            <li className="flex ">
                                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </i>
                                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">Atlanta, GA, USA</span>
                            </li>

                            {/* Email */}
                            <li className="flex ">
                                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </i>
                                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">khanhnphan15@gmail.com</span>
                            </li>

                            {/* Phone */}
                            <li className="flex ">
                                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </i>
                                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">000-000-0000</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Contact;






