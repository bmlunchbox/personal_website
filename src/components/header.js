import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'
import { ProfileImage } from "../components/image"

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
                <a href="/" target="_blank" rel="noopener noreferrer" style={{'marginLeft':'0'}}>
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
                <a style={{'margin-left':'0'}} href="#timeline">Timeline</a>
                <a href="#projects">Projects</a>
                <a href="#readings">Readings</a>
                <a href="#cats">Cats</a>
                </div>
            </div>
            
            <div className="portrait">
                <ProfileImage />
            </div>
            </div>
        </div>
    );
}

export default Header;
