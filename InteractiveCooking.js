import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './home.css';

const VoiceAndVideoCooking = ({ setPage }) => {
    const [foodItem, setFoodItem] = useState('');
    const [instructions, setInstructions] = useState([]);
    const [isListening, setIsListening] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [videoStream, setVideoStream] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Hardcoded recipe instructions
    const fetchInstructions = async (food) => {
        const lowerFood = food.toLowerCase();
        const recipes = {
            pasta: [
                "Recipe: Classic Pasta",
                "Step 1: Boil water in a large pot.",
                "Step 2: Add pasta and cook until al dente.",
                "Step 3: Drain and set aside.",
                "Step 4: In a pan, heat olive oil and sauté garlic.",
                "Step 5: Add tomato sauce and season with salt, pepper, and herbs.",
                "Step 6: Combine pasta with the sauce, mix well, and serve hot."
            ],
            omelette: [
                "Recipe: Simple Omelette",
                "Step 1: Crack 2-3 eggs into a bowl and whisk.",
                "Step 2: Add salt, pepper, and chopped veggies if desired.",
                "Step 3: Heat butter or oil in a pan.",
                "Step 4: Pour in the egg mixture.",
                "Step 5: Let it cook for 1-2 minutes until bottom is set.",
                "Step 6: Fold the omelette and serve hot."
            ],
            "fried rice": [
                "Recipe: Veg Fried Rice",
                "Step 1: Cook rice and let it cool.",
                "Step 2: In a wok, heat oil and sauté garlic and onions.",
                "Step 3: Add chopped vegetables and cook until tender.",
                "Step 4: Add cooked rice and soy sauce.",
                "Step 5: Mix everything well, season with salt and pepper.",
                "Step 6: Garnish with spring onions and serve hot."
            ]
        };

        if (recipes[lowerFood]) {
            setInstructions(recipes[lowerFood]);
        } else {
            setInstructions([
                `Recipe: ${food}`,
                "Step 1: Sorry, we don't have a detailed recipe for this item yet.",
                "Step 2: Please try a different search like 'pasta', 'omelette', or 'fried rice'."
            ]);
        }
    };

    const startVoiceSearch = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Voice recognition is not supported in this browser.");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "en-US";

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            setFoodItem(transcript);
            fetchInstructions(transcript);
        };

        recognition.start();
    };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setVideoStream(stream);
        } catch (err) {
            console.error("Error accessing camera: ", err);
        }
    };

    const stopCamera = () => {
        if (videoStream) {
            videoStream.getTracks().forEach(track => track.stop());
            setVideoStream(null);
        }
    };

    useEffect(() => {
        if (isCameraOn) {
            startCamera();
        } else {
            stopCamera();
        }
    }, [isCameraOn]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setFoodItem(searchQuery);
        fetchInstructions(searchQuery);
    };

    return (
        <div className="voice-video-container">
            <Navbar setPage={setPage} />
            <button
                onClick={() => setPage('home')}
                className="btn-home"
            >
                Back
            </button>

            <div className="interactive-cooking-div">
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a recipe..."
                    />
                    <button onClick={handleSearchSubmit} className="search-btn">🔍</button>
                    <button onClick={startVoiceSearch} className="voice-btn">
                        🎤
                    </button>
                </div>

                <div className="video-container">
                    <button onClick={() => setIsCameraOn(!isCameraOn)} className="btn-camera">
                        {isCameraOn ? "Stop Camera" : "Start Cooking with Camera"}
                    </button>

                    {isCameraOn && (
                        <video
                            autoPlay
                            playsInline
                            muted
                            ref={(videoRef) => {
                                if (videoRef && videoStream) {
                                    videoRef.srcObject = videoStream;
                                }
                            }}
                        />
                    )}
                </div>

                <h2>Food Item: {foodItem}</h2>
                <ul>
                    {instructions.map((step, index) => <li key={index}>{step}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default VoiceAndVideoCooking;
