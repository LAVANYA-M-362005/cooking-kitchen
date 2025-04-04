// Navbar.js
import React from 'react';
import { FaUtensils, FaShoppingCart, FaClipboardList, FaUserCircle } from 'react-icons/fa';
import './home.css';

const Navbar = ({ setPage }) => {
    return (
        <header className="home-header">
            <h1>Cooking Kitchen</h1>
            <nav>
                <ul>
                    {/* Link to Interactive Cooking */}
                    <li><button onClick={() => setPage('cooking')}><FaUtensils /> Interactive Cooking</button></li>
                    <li><button onClick={() => setPage('ingredients')}><FaUtensils /> Ingredients booking</button></li>
                    <li><button onClick={() => setPage('management')}><FaUtensils /> Ingredient management</button></li>

                    <li className="profile"><a href="#profile"><FaUserCircle /> Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
