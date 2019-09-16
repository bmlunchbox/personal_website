import React from 'react'
import Pdf from '../assets/brandonleungresume.pdf'

const About = () => {
    return (
        <div className="section" style={{'background': '#FFF9FB'}}>
            <h2 className="about-section">About</h2>
            <div className="content-container">
                I'm Brandon Leung, a 3B Management Engineering student at the <a href="https://uwaterloo.ca/engineering/" target="_blank" rel="noopener noreferrer">University of Waterloo</a>; a program that sits at the intersection of operations research and
                software engineering. Currently, I'm a team lead for <a href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer">UW Blueprint</a>, working alongside nonprofits to build software for social good. Previously, I was
                a software developer intern at <a href="https://www.textnow.com" target="_blank" rel="noopener noreferrer">TextNow</a> on the web team; working on infrastructure, deployment pipelines, and building React components. Here is my <a href={Pdf} target="_blank" rel="noopener noreferrer">resume</a>.
            </div>
            <div className="content-container">
                In my spare time, I like studying and learning about certain areas of software engineering and human behaviour. My current interests span distributed  
                systems, human factors, user experience and interfaces, and web technologies.
            </div>
            <div className="content-container">
                Some other things I enjoy: <a href="https://uwdbc.com/" target="_blank" rel="noopener noreferrer">dragon boat</a>, theology, AWS, homecooked meals, Kubernetes, the Raptors, weightlifting, crosswords, comic books, scented candles, and <a href="#cats">hanging out with my cats</a>.
            </div>
        </div>
    );
}

export default About;