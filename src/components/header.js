import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'
import { ProfileImage } from "../components/image"
import Pdf from '../assets/brandonleungresume.pdf'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
            <div className="profile-info">
                <h1 className="name">Brandon Leung</h1>
                <div className="sub1">Management Engineering</div>
                <div className="sub1">University of Waterloo</div>
                <div className="sub2">brandonmichael.kg@gmail.com</div>

                <div className="icon-container">
                <a href={Pdf} target="_blank" rel="noopener noreferrer" style={{'marginLeft':'0'}}>
                    <FaFileAlt style={{'fill':'#454545'}}/>
                </a>
                <a href="https://github.com/brandonleung" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{'fill':'#454545'}}/>
                </a>
                <a href="https://www.linkedin.com/in/brandonmichaelkg/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{'fill':'#454545'}}/>
                </a>
                </div>
                
                <div class="link-container">
                <a style={{'margin-left':'0'}} href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#cats">Cats</a>
                </div>
                
            </div>
            
            <div className="portrait">
                <ProfileImage />
            </div>
            <div className="content-container" style={{'marginLeft':'0', 'font-size': '0.95em', 'paddingTop':'48%'}}>
                I'm looking for a 2021 new grad software engineering role. Here's my <a href={Pdf} target="_blank" rel="noopener noreferrer">resume</a> and my <a href="https://www.linkedin.com/in/brandonmichaelkg/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Please let me know if we'd be a good match!
            </div>
            </div>
        </div>
    );
}

export default Header;
