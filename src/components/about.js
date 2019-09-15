import React from 'react'

const About = () => {
    return (
        <div className="section" style={{'background': '#FFF9FB'}}>
            <h2 className="about-section">About</h2>
            <div className="content-container">
                I'm Brandon Leung, a 3B <a>Management Engineering</a> student at the <a>University of Waterloo</a>; a program that sits at the intersection of operations research and
                software engineering. Currently, I'm a team lead for <a>UW Blueprint</a>, working alongside nonprofits to build software for social good. Previously, I was
                a software developer intern at <a>TextNow</a> on the web team working on infrastructure, deployment pipelines, and building React components. Here is my <a>resume</a>.
            </div>
            <div className="content-container">
                In my spare time, I like studying and learning about certain areas of software engineering and human behaviour. My current interests span distributed  
                systems, human factors, user experience and interfaces, and web technologies.
            </div>
            <div className="content-container">
                Some other things I enjoy: <a>dragon boat</a>, theology, AWS, homecooked meals, Kubernetes, the Raptors, weightlifting, crosswords, comic books, scented candles, and <a>hanging out with my cats</a>.
            </div>
        </div>
    );
}

export default About;