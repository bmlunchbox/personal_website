import React from 'react'

const Readings = () => {
    return (
        <div id="readings" className="section" style={{'background': '#FFF9FB'}}>
        <h2 className="readings-section">Readings</h2>
        <div className="content-container">
            These are some of the best books I've read lately.   
        </div>
        <div className="content-container" style={{'marginTop':'3%'}}>
            <div className="book-container">
                <div className="book-title">Design of Everyday Things*</div>
                <div className="author">Don Norman</div>
                <div className="book-description">This book has shaped the field of design by answering the question <i>'what makes good design?'</i> using psychology and engineering principals.</div>
            </div>
            <div className="book-container">
                <div className="book-title">Designing Data-Intensive Applications</div>
                <div className="author">Martin Kleppmann</div>
                <div className="book-description">This guide explores the technical decisions made behind scalable, distributed systems. </div>
            </div>
            <div className="book-container">
                <div className="book-title">The Tipping Point</div>
                <div className="author">Malcolm Gladwell</div>
                <div className="book-description">A cool book about the sociology behind trends.</div>
            </div>
            <div className="book-container">
                <div className="book-title">Mere Christianity</div>
                <div className="author">CS Lewis</div>
                <div className="book-description">This series of essays by CS Lewis explores morality, Christianity, and the truth about the universe. This book is profound and enlightening. I've read it three times. </div>
            </div>
            <div className="book-container">
                <div className="book-title">Americanah</div>
                <div className="author">Chimamanda Ngozi Adichie</div>
                <div className="book-description">I read this book four years ago in English class and I still think about it today. Through blogs written
                by the protagonist, Adichie expertly examines the psychological impact of immigration, highlights cultural nuances, and examines the intracacies of race in America.</div>
            </div>
        </div>
        <div className="content-container" style={{'fontSize':'0.8em'}}>
            (*) currently reading
        </div>
        <div className="content-container" style={{'fontSize':'0.8em'}}>Special thanks to Alli for getting me a Kindle; helping me get back into reading.</div>
        </div>
    );
}

export default Readings;