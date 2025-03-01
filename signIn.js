// SignIn.js
import React, { useState } from 'react';
import './signIn.css';

function SignIn({ setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Navigating to Home Page...");
        setPage('home'); // ✅ Navigate to Home Page
    };

    const handleGoogleLogin = () => {
        console.log("Logging in with Google...");
    };

    return (
        <div className="signin-page">
            {/* ✅ Header Section */}
            <header className="signin-header">
                <h1>Cooking App</h1>
            </header>

            {/* ✅ Sign-In Container */}
            <div className="signin-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="terms-checkbox">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                        />
                        <label htmlFor="agreeToTerms">
                            Confirm that I have read, understood, and agree to Cooking Kitchen’s Terms of Use and Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="submit-button">
                        submit
                    </button>
                </form>
                <div className="forgot-password">
                    <a href="#forgot-password">Forgot password?</a>
                </div>
                <div className="signup-link">
                    Don't have an account? <a href="#signup">Sign up</a>
                </div>
                <button className="google-login" onClick={handleGoogleLogin}>
                    Log in with Google
                </button>
            </div>
        </div>
    );
}

export default SignIn;
