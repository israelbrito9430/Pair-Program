import React from 'react'
import {Link} from "react-router-dom"
import '../HomePage/HomePage.scss'


function HomePage() {
    return (
    <section className="home" >
        <div >
            <h1>Test Your Knowledge</h1>
            <Link to="/trivia">
            <button>Enter</button>
            </Link>
        </div>
    </section>
    )
}

export default HomePage
