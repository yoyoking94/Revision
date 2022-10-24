import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
