import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/wish" className="nav-link">Wishes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/message" className="nav-link">Messages</Link>
                </li>
                <li className="nav-item">
                    <Link to="/songs" className="nav-link">Songs</Link>
                </li>
                <li className="nav-item">
                    <Link to="/photos" className="nav-link">Photos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/marry" className="nav-link">Question for you</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;