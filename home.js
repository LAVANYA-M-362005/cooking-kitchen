// Home.js
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './home.css';

function Home({ setPage }) {
    return (
        <div className="home-container">
            {/* Navbar */}
            <Navbar setPage={setPage} />

            <main>
                {/* Interactive Cooking Section with Image */}
                <section id="cooking" className="feature-card">
                    <img src="https://source.unsplash.com/400x250/?cooking,food" alt="Cooking" />
                    <h2>Interactive Cooking</h2>
                    <p>Join live cooking sessions and follow AI-powered recipes.</p>
                    <button onClick={() => setPage('cooking')}>Start Interactive Cooking</button> {/* Navigate to Cooking */}
                </section>

                {/* Ingredient Booking Section with Image */}
                <section id="ingredients" className="feature-card">
                    <img src="https://source.unsplash.com/400x250/?grocery,vegetables" alt="Ingredients" />
                    <h2>Ingredient Booking</h2>
                    <p>Order the freshest ingredients for your next meal.</p>
                </section>

                {/* Smart Ingredient Management Section with Image */}
                <section id="management" className="feature-card">
                    <img src="https://source.unsplash.com/400x250/?food,storage" alt="Smart Management" />
                    <h2>Smart Ingredient Management</h2>
                    <p>Track your ingredients and manage your inventory efficiently.</p>
                </section>
            </main>
        </div>
    );
}

export default Home;
