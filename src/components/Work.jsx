import React from "react";
import WorkItem from './WorkItem'

const data = [

    {
        year: 2023,
        company: 'Meldcore LLC',
        duration: '2 years',
        title: 'Software Engineer-Contract',
        details: 'Front-end Development Expertise: specializing in updates and maintenance using Ember Octane JS, complemented by PostgreSQL for robust database management.UI/UX Focused: Delivered responsive and user-friendly interfaces across web and mobile platforms using custom CSS, ensuring products like the multi-tenant Benefits Management System and the Case Management Application meet high usability standards.Collaborative Approach: Actively shadowed team leads, contributing to projects like an academic-focused Language Learning Platform, and streamlined communication tools for the legal community'
    },

    {
        year: 2023,
        company: 'General Assembly Full-stack Immersive Course',
        duration: '3 months',
        title: 'Software Engineer Fellow',
        details: 'Completing 480+ hours of instruction in Javascript, Python, React, Django and Node.js.'

    },

    {
        year: 2018,
        company: 'Willmer Engineering Inc',
        duration: '2 years',
        title: 'Accountant Assistant',
        details: 'Provided administrative support to the controller, managed the day-to-day tracking of expenditures and profits, processed expense reports in Deltek Vision, and reconciled accounts payable transactions.'
    },

    {
        year: 2016,
        company: 'H&R Block',
        duration: '2 years',
        title: 'Accountant Assistant',
        details: 'Evaluated financial records, including income statements and expenditure documentation, to identify necessary forms for tax return preparation and audits. Skillfully completed and submitted income tax, sale tax, and payroll returns for both companies and individuals.'
    },

    {
        year: 2016,
        company: 'Quynh Nhi CPA',
        duration: '1 years',
        title: 'Bookkeeper',
        details: 'Provided administrative support to the controller, managed the day-to-day tracking of expenditures and profits, processed expense reports in Deltek Vision, and reconciled accounts payable transactions.'
    }

]
const Work = () => {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work Experiences</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} company={item.company} duration={item.duration} title={item.title} details={item.details} />
            ))}
        </div>

    )
}
export default Work