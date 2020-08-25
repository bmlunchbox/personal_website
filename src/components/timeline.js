import React from 'react'

const Timeline = () => {
    return (
        <div id="experience" className="section" style={{'background': '#D5EDF9'}}>
            <h2 className="timeline-section">Experience</h2>
            <div className="content-container" style={{'margin-bottom':'2%'}}>
                I'm fortunate to be in a co-op program, meaning that I get to graduate with six internship experiences.
            </div>
            <div className="content-container sub">
                <span className="date">Upcoming Fall 2020</span>
                <span className="sub-content">Returning to <a href="https://wish.com" target="_blank" rel="noopener noreferrer">Wish</a> for another internship.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Jan to Apr 2020</span>
                <span className="sub-content">Software engineering intern at <a href="https://wish.com" target="_blank" rel="noopener noreferrer">Wish</a> in San Francisco, working on the post-purchase customer experience.</span>
            </div>
            <div className="content-container sub">
                <span className="date">May to Aug 2019</span>
                <span className="sub-content">Software engineering intern at <a href="https://www.textnow.com/" target="_blank" rel="noopener noreferrer">TextNow</a> in Waterloo. I worked on web infrastructure for the VoIP service. </span>
            </div>
            <div className="content-container sub">
                <span className="date">Sept to Dec 2018</span>
                <span className="sub-content">Backend engineering intern at <a href="https://www.ceridian.com/ca/products/dayforce" target="_blank" rel="noopener noreferrer">Ceridian</a> in Toronto on the mobile team.</span>
            </div>
            <div className="content-container sub">
                <span className="date">Jan to Apr 2018</span>
                <span className="sub-content">Software engineering intern at <a href="http://oculys.com/" target="_blank" rel="noopener noreferrer">Oculys Health Informatics</a>, a healthcare startup in Waterloo.</span>
            </div>
            <div className="content-container sub">
                <span className="date">May to Aug 2017</span>
                <span className="sub-content">Software engineering intern at <a href="https://www.walterfedy.com/" target="_blank" rel="noopener noreferrer">WalterFedy</a>. I worked on internal tools for an architecture firm in Kitchener</span>
            </div>

            <div className="content-container" style={{'margin-top': '3%'}}>
                I joined design teams and clubs to make friends and learn new things! These are the highlights:
            </div>
            <div className="content-container" style={{'margin-bottom':'2%'}}>
                <div className="clubs-content">
                    <span className="bullet">-</span>team lead for Travelwise, BEP, and DanceFest (web + Android) projects at <a href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer">UW Blueprint </a>
                    <div style={{'margin-left':'4.5%'}}><i>(Fall '20, Summer '20, Fall '19, Summer '19)</i></div>
                </div>
                <div className="clubs-content">
                    <span className="bullet">-</span>project developer for KidsAbility at <a href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer">UW Blueprint</a>
                    <i> (Winter '19)</i>
                </div>
                <div className="clubs-content">
                    <span className="bullet">-</span>software developer on the mapping subteam at <a href="https://www.watonomous.ca/" target="_blank" rel="noopener noreferrer">WATonomous</a>
                    <i> (Fall '17)</i>
                </div>
                <div className="clubs-content">
                    <span className="bullet">-</span>member of <a href="https://www.uwccf.com/" target="_blank" rel="noopener noreferrer">UWCCF</a>
                    <i> (all terms)</i>
                </div>
                <div className="clubs-content">
                    <span className="bullet">-</span>dragon boat paddler for <a href="https://uwdbc.com/" target="_blank" rel="noopener noreferrer">UW Vikings</a>; we won 3 gold and a silver at the 2018 CC World Championships in Hungary!
                    <div style={{'margin-left':'4.5%'}}><i> (2017, 2018)</i></div>
                </div>
            </div>
        </div>
    )
}

export default Timeline