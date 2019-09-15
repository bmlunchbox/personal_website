import React from "react"
import { FaLinkedin, FaGithub, FaFileAlt, FaCentercode } from 'react-icons/fa'

import Layout from "../components/layout"
import ProfileImage from "../components/image"

const IndexPage = () => (
  <Layout>
    <div className="header-container">
      <div className="header-content">
        <div className="profile-info">
          <h1 className="name">Brandon Leung</h1>
          <div className="sub1">Management Engineering</div>
          <div className="sub1">University of Waterloo</div>
          <div className="sub2">brandonmichael.kg@gmail.com</div>

          <div class="icon-container">
            <a href="/" target="_blank" rel="noopener noreferrer" style={{'margin-left':'0'}}>
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
        Some other things I enjoy: <a>dragon boat</a>, theology, AWS, homecooked meals, Kubernetes, weightlifting, crosswords, comic books, scented candles, and <a>hanging out with my cats</a>.
      </div>
    </div>

    <div className="section" style={{'background': '#D5EDF9'}}>
      <h2 className="timeline-section">Timeline</h2>
      <div className="content-container" style={{'margin-bottom':'2%'}}>
        These past few years I've been fortunate enough to meet and work with some amazing people. Here are some of my favourite experiences.
      </div>
      <div className="content-container sub">
        <span className="date">Aug 2019 to Present</span>
        <span className="sub-content">UW Blueprint</span>
      </div>
      <div className="content-container sub">
        <span className="date">May to Aug 2019</span>
        <span className="sub-content">TextNow and Blueprint</span>
      </div>
      <div className="content-container sub">
        <span className="date">Jan to May 2019</span>
        <span className="sub-content">Blueprint</span>
      </div>
      <div className="content-container sub">
        <span className="date">Sept to Dec 2018</span>
        <span className="sub-content">Ceridian</span>
      </div>
      <div className="content-container sub">
        <span className="date">Aug 2018</span>
        <span className="sub-content">Dragon Boat</span>
      </div>
      <div className="content-container sub">
        <span className="date">Jan to Apr 2018</span>
        <span className="sub-content">Oculys Health Informatics</span>
      </div>
      <div className="content-container sub">
        <span className="date">Sept to Dec 2017</span>
        <span className="sub-content">WATonomous</span>
      </div>
      <div className="content-container sub">
        <span className="date">May to Aug 2017</span>
        <span className="sub-content">WalterFedy</span>
      </div>
      <div className="content-container sub">
        <span className="date">Jan to Apr 2017</span>
        <span className="sub-content">Industry 4.0</span>
      </div>
      <div className="content-container sub">
        <span className="date">Sept 2016</span>
        <span className="sub-content">University of Waterloo</span>
      </div>
    </div>
{/* 
    <div className="section" style={{'background': '#FFFCD9'}}>
      <h2 className="projects-section">Projects</h2>
      <div className="content-container">
      </div>
    </div>
    <div className="section" style={{'background': '#FFF9FB'}}>
      <h2 className="readings-section">Readings</h2>
      <div className="content-container">
      </div>
    </div>
*/}
    <div className="section" style={{'background': '#FFFCD9'}}>
      <h2 className="readings-section">Cats</h2>
      <div className="content-container">
        I have three awesome cats. Their names are Scully, Nala, and Randall.
      </div>
      <div className="content-container">
        My brother and I have an Instagram account full of pictures of them for family and friends.
      </div>
    </div>
  </Layout>
)

export default IndexPage
