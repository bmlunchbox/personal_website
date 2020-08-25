import React from 'react'
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa'

const Projects = () => {
    return (
        <div id="projects" className="section" style={{'background': '#FFFCD9'}}>
            <h2 className="projects-section">Projects</h2>

            <div className="content-container" style={{'marginTop':'2%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">Tenet</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>Final Year Design Project</div>
                        <div className="pt-tags">
                            <span style={{'background':'#A0DBFE'}}>student team</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc" style={{'margin-bottom': '1%'}}>We are building a no-code platform for building logistics and administrative apps. It is NLP-powered and recommends app templates based on an interaction ontology. Links will be up soon.
                            <div style={{'margin-top':'1%', 'font-size': '0.9em'}}>
                                <i>Using Python, Apache Thrift, Docker, Kubernetes, PostgreSQL, MongoDB, Flask, React, and Redux. </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'3%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">Shopify Store Mining</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>MSCI 446: Data Mining</div>
                        <div className="pt-tags">
                            <span style={{'background':'#e5e1e0'}}>python script</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">Applied k-means clustering and logistical regression to find a correlation between app descriptions and review sentiments. 
                            <div style={{'margin-top':'1%', 'font-size': '0.9em'}}>
                                <i>Made with Python, pandas, and NLTK. </i>
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a href="https://github.com/brandonleung/StoreMining" target="_blank" rel="noopener noreferrer">Github</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'3%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">Business Education Partnership</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>UW Blueprint</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>web app</span>
                            <span style={{'background':'#A0DBFE'}}>student team</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc" style={{'margin-bottom': '1%'}}>A platform to help teachers find local professionals for school events.
                            <div style={{'margin-top':'8%', 'font-size': '0.9em'}}>
                                <i>Made with React, Redux, Express, Node, and Salesforce Lightning. </i>
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a href="https://github.com/uwblueprint/BEP/" target="_blank" rel="noopener noreferrer">Github</a></span>
                            <span><FaGlobeAmericas /><a href="http://www.bus-edpartnership.org/" target="_blank" rel="noopener noreferrer">Organization Website</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'3%'}}>
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
                        <div className="pt-desc">An app for Waterloo Sustainable Region to help local companies coordinate carpools.
                            <div style={{'margin-top':'1%', 'font-size': '0.9em'}}>
                                <i>Made with React, Apollo GraphQL, Node, Express, Hasura, and PostgresSQL. </i>
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a href="https://github.com/uwblueprint/travelwise-react" target="_blank" rel="noopener noreferrer">Frontend</a></span>
                            <span><FaGithub /><a href="https://github.com/uwblueprint/travelwise-backend" target="_blank" rel="noopener noreferrer">Backend</a></span>
                            <span><FaGlobeAmericas /><a href="https://www.regionofwaterloo.ca/en/doing-business/travelwise.aspx" target="_blank" rel="noopener noreferrer">Organization Website</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'3%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">DanceFest</div>
                        <div className="sub1" style={{'letterSpacing':'0'}}>UW Blueprint</div>
                        <div className="pt-tags">
                            <span style={{'background':'#E5B9F2'}}>web app</span>
                            <span style={{'background':'#F2C4B7'}}>android</span>
                            <span style={{'background':'#A0DBFE'}}>student team</span>
                        </div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc">An offline-first platform (Android + web) to support the event logistics for a non-profit dance program for grade school students.
                            <div style={{'margin-bottom':'1%', 'margin-top':'6%', 'font-size':'0.9em'}}>
                                <i>Made with React, Python, Apache Thrift, Flask, Kotlin, and PostgresSQL. </i>
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a href="https://github.com/uwblueprint/dancefest-web" target="_blank" rel="noopener noreferrer">Web App</a></span>
                            <span><FaGithub /><a href="https://github.com/uwblueprint/dancefest-android" target="_blank" rel="noopener noreferrer">Android</a></span>
                            <span><FaGlobeAmericas /><a href="https://www.ontariosecondaryschooldancefest.ca/" target="_blank" rel="noopener noreferrer">Organization Website</a></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="content-container" style={{'marginTop':'3%'}}>
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
                                An appointment scheduling tool for child treatment centers.
                            </div>
                            <div style={{'margin-bottom':'1%', 'margin-top':'2%', 'font-size':'0.9em'}}>
                                <i>Made with React, Express, Node, and MongoDB. </i>
                            </div>
                        </div>
                        <div className="pt-links">
                            <span><FaGithub /><a href="https://github.com/uwblueprint/KidsAbility" target="_blank" rel="noopener noreferrer">Github</a></span>
                            <span><FaGlobeAmericas /><a href="https://www.kidsability.ca/" target="_blank" rel="noopener noreferrer">Organization Website</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container" style={{'marginTop':'3%'}}>
                <div className="pt-container">
                    <div className="pt-info">
                        <div className="pt-title">Various Distributed Computing Projects</div>
                        <div className="sub1" style={{'margin-top': '3%', 'letterSpacing':'0'}}>ECE 454: Distributed Computing</div>
                    </div>
                    <div className="pt-right">
                        <div className="pt-desc" style={{'margin-bottom': '1%'}}>Learned about scalability, efficiency, concurrency control, and fault tolerance across 5 practical projects.
                            <div style={{'margin-top':'3%', 'font-size': '0.9em'}}>
                                <i>Used Java, Scala, Apache Thrift, Apache Kafka, Apache Hadoop, Apache Spark, Apache ZooKeeper, and Bash. </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;