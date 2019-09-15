import React from 'react'
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa'

const Projects = () => {
    return (
        <div id="projects" className="section" style={{'background': '#FFFCD9'}}>
            <h2 className="projects-section">Projects</h2>
            <div className="content-container">
                Recent escapades in student design teams, development, and coursework.
            </div>
            <div className="content-container" style={{'marginTop':'4%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">TravelWise</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>UW Blueprint</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>web app</span>
                            <span style={{'background':'#A0DBFE'}}>student team</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">TravelWise is an initiative by Waterloo Sustainable Region, aiming to help companies coordinate carpools.
                            <div style={{'margin':'1% auto'}}>
                                Blueprint is building an administration and communications platform for TravelWise, key features include a news feed and document hosting. 
                            </div>
                            <div style={{'margin':'1% auto'}}>
                                Made with React, Apollo GraphQL, TypeScript, Node, Express, Hasura, and Postgres. 
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a>Frontend</a></span>
                            <span><FaGithub /><a>Backend</a></span>
                            <span><FaGlobeAmericas /><a>Website</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'2%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">DanceFest</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>UW Blueprint</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>web app</span>
                            <span style={{'background':'#A0DBFE'}}>student team</span>
                            <span style={{'background':'#F2C4B7'}}>android</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">DanceFest is a free dance program that encourages grade school students to participate in an expressive and active extracurricular.
                            <div style={{'margin':'1% auto'}}>
                                Blueprint has built a performance adjudication platform and administrative platform on web and Android.
                            </div>
                            <div style={{'margin':'1% auto'}}>
                                Made with React, Python, Flask, Kotlin, and Postgres. 
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a>Web App</a></span>
                            <span><FaGithub /><a>Android</a></span>
                            <span><FaGlobeAmericas /><a>Website</a></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="content-container" style={{'marginTop':'4%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">Compiler</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>development</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">I'm in the process of learning about compilers and building one from scratch using Rust.
                            <div style={{'margin':'1% auto'}}>
                                You can expect a Github link in the coming weeks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'4%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">KidsAbility</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>UW Blueprint</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>web app</span>
                            <span style={{'background':'#A0DBFE'}}>student team</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">
                            <div style={{'margin':'1% auto'}}>
                                Blueprint has built a performance adjudication platform and administrative platform on web and Android.
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a>Github</a></span>
                            <span><FaGlobeAmericas /><a>Website</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'4%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">DSS for Engineering Electives</div>
                        <div className="sub1" style={{'fontSize':'0.8em','letterSpacing':'0'}}>MSCI 436: Decision Support Systems</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>web app</span>
                            <span style={{'background':'#A0DBFE'}}>coursework</span>
                            <span style={{'background':'#F2C4B7'}}>development</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">As part of the Decision Support Systems course (basically an intro to ML), I built a decision support system 
                        to help Waterloo engineers with selecting electives.
                            <div style={{'margin':'1% auto'}}>
                                I used Python and Selenium for scraping university and course review websites. The web app was created using React, Express, Node, and Mongo.
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a>Github</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;