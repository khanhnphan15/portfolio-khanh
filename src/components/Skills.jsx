import React from "react";

const Skills = () => {
    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20'>
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Top Skills</h1>
            <p className="text-center py-8">
            Here's a snapshot of the skills I've honed over recent projects.
            </p>
            <h6 className="text-lg font-semibold text-[#001b5e]">Languages</h6>

            <span>Python, JavaScript, HTML, CSS, PostgreSQL, Ember JS, MongoDB, JSON, Node JS.</span>

            <h6 className="text-lg font-semibold text-[#001b5e]">Frameworks</h6>

            <span>React, Express.js, Django, Jquery, Bootstrap, Semantic UI, Bulma</span>

            <h6 className="text-lg font-semibold text-[#001b5e]">Database</h6>

            <span>PostgreSQL, MongoDB, RESTful Routing, JSON API</span>

        </div>
    )
}

export default Skills;
