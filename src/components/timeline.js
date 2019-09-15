import React from 'react'

const Timeline = () => {
    return (
        <div id="timeline" className="section" style={{'background': '#D5EDF9'}}>
            <h2 className="timeline-section">Timeline</h2>
            <div className="content-container" style={{'margin-bottom':'2%'}}>
                These past few years I've been fortunate enough to meet and work with some amazing people. These are the highlights.
            </div>
            <div className="content-container sub">
                <span className="date">Aug 2019 to Present</span>
                <span className="sub-content">I'm currently a team lead for UW Blueprint's <a>TravelWise</a> project. I'm responsible for mentoring and working alongside my team to architect and build 
                a web platform.</span>
            </div>
            <div className="content-container sub">
                <span className="date">May to Aug 2019</span>
                <span className="sub-content">Over the summer I worked at <a>TextNow</a> as a software engineering intern on the web team. I worked on improving web infrastructure and deployment pipelines. After work, I was a product manager for Blueprint's <a>DanceFest</a>.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Jan to May 2019</span>
                <span className="sub-content">I was a software developer for Blueprint's <a>KidsAbility</a> project, building scheduling web apps for child treatment centers.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Sept to Dec 2018</span>
                <span className="sub-content">I joined <a>Ceridian</a> as a backend engineering intern on the mobile.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Aug 2018</span>
                <span className="sub-content">I represented Canada and Waterloo at the Dragon Boat World Championships in Hungary! We came back with three golds and a silver.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Jan to Apr 2018</span>
                <span className="sub-content">Started my internship at <a>Oculys Health Informatics</a>. I got to experience startup culture while building a cool React and Go based app.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Sept to Dec 2017</span>
                <span className="sub-content">I learned about computer vision when I was on <a>WATonomous</a>, working on localization.</span>
            </div>
            <div className="content-container sub">
                <span className="date">May to Aug 2017</span>
                <span className="sub-content">My first internship was at <a>WalterFedy</a> as a software engineering intern working on internal operations tools.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Jan to Apr 2017</span>
                <span className="sub-content">Researched communication protocols for autonomous factories under <a>Ken McKay</a>.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Sept 2016</span>
                <span className="sub-content">Started studying Management Engineering at the <a>University of Waterloo</a>. Think of it as a mix of software engineering, operations research,
                and management science. <a href="https://uwaterloo.ca/management-sciences/sites/ca.management-sciences/files/uploads/files/Management_Engineering_discussion_paper.pdf">This</a> discussion 
                paper explains what I'm studying.</span>
            </div>
        </div>
    )
}

export default Timeline