import React from 'react';
import './home.css';
import Navbar from './Navbar';

function Home({ setPage }) {
    const handleIngredientManagementClick = () => {
        console.log('Navigating to Ingredient Management');
        setPage('management'); // Ensure this matches the Navbar
    };


    return (
        <div className="home-container">
            <Navbar setPage={setPage} />

            <div className="main-image-container">
                <img
                    src="https://wallpaperaccess.com/full/9109186.jpg"
                    alt="Cooking Banner"
                    className="main-image"
                />

                <div className="welcome-text">
                    Welcome to the Cooking Site
                </div>
                <div className="wavy-overlay">
                    <h1>All-in-One Cooking Assistant</h1>
                    <p>Experience the smart way to cook with AI-powered recipes and more!</p>
                </div>
            </div>

            <div className="feature-cards-container">
                <section className="feature-card">
                    <img src="https://source.unsplash.com/400x250/?grocery,vegetables" alt="Ingredients" />
                    <h2>Ingredient Booking</h2>
                    <p>Order the freshest ingredients for your next meal.</p>
                    <button onClick={() => setPage('ingredients')}>Start Ingredient Booking</button>
                </section>

                <section className="feature-card">
                    <img src="https://source.unsplash.com/400x250/?cooking,food" alt="Cooking" />
                    <h2>Interactive Cooking</h2>
                    <p>Join live cooking sessions and follow AI-powered recipes.</p>
                    <button onClick={() => setPage('cooking')}>Start Interactive Cooking</button>
                </section>

                <section className="feature-card">
                    <img src="https://source.unsplash.com/400x250/?food,storage" alt="Smart Management" />
                    <h2>Smart Ingredient Management</h2>
                    <p>Track your ingredients and manage your inventory efficiently.</p>
                    <button onClick={handleIngredientManagementClick}>
                        Ingredient Management
                    </button>
                </section>
            </div>

            <footer className="footer">
                <p>Contact Us:<br />
                    cookapp@lavanya.com | +456 901 3956<br />
                    cookapp@lakshmi.com | +234 466 7990<br />
                    cookapp@Rakshita.com|+456 8963 123<br />
                    cookapp@pragati.com | +123 456 7890
                </p>
            </footer>
        </div>
    );
}

export default Home;
