import React from 'react'
import Pdf from '../assets/brandonleungresume.pdf'

const About = () => {
    return (
        <div className="section" style={{'background': '#FFF9FB'}}>
            <h2 className="about-section">About Me</h2>
            <div className="content-container">
                Thanks for stopping by! I'm Brandon Leung, a 4th year Management Engineering student at the University of Waterloo. Currently, I am a software intern at <a href="https://www.wish.com/" target="_blank" rel="noopener noreferrer">Wish</a>, working on their core product.
            </div>
            <div className="content-container">
                When I'm not studying or working, you can find me <a href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer">building software for social good</a>, watching the Raptors, reading, or <a href="#cats">hanging out with my cats</a>.
            </div>
        </div>
    );
}

export default About;