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
                    <li><a href="#ingredients"><FaShoppingCart /> Ingredient Booking</a></li>
                    <li><a href="#management"><FaClipboardList /> Smart Ingredient Management</a></li>
                    <li className="profile"><a href="#profile"><FaUserCircle /> Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
