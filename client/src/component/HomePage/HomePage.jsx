import React from 'react'
import {Link} from "react-router-dom"
import '../HomePage/HomePage.scss'


function HomePage() {
    return (
    <section className="home" >
       <h1 className="home--title">TRIVIA</h1>
        <div >
            <h2 className="home--slogan">Test Your Knowledge!</h2>
            <Link to="/trivia">
            <button>Enter</button>
            </Link>
        </div>
    </section>
    )
}

export default HomePage
