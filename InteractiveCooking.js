// VoiceAndVideoCooking.js
// VoiceAndVideoCooking.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './home.css';

const VoiceAndVideoCooking = () => {
    const [foodItem, setFoodItem] = useState('');
    const [instructions, setInstructions] = useState([]);
    const [isListening, setIsListening] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [videoStream, setVideoStream] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Predefined recipes with steps
    const recipes = {
        "pasta": [
            "Boil water in a pot.",
            "Add pasta and cook for 8-10 minutes.",
            "Stir occasionally to prevent sticking.",
            "Drain the pasta and serve with sauce."
        ],
        "salad": [
            "Chop lettuce and vegetables.",
            "Add dressing of your choice.",
            "Mix everything together and serve."
        ],
        "pizza": [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the dough and add sauce and toppings.",
            "Bake for 10-15 minutes until the crust is golden brown.",
            "Slice and serve."
        ],
        "sandwich": [
            "Toast two slices of bread.",
            "Add desired fillings like lettuce, tomato, and cheese.",
            "Put the slices together and serve."
        ],
        "soup": [
            "Boil broth in a pot.",
            "Add chopped vegetables and cook for 10-15 minutes.",
            "Stir occasionally, then serve."
        ]
    };

    // Fetch instructions from predefined recipes
    const fetchInstructions = (food) => {
        const recipe = recipes[food.toLowerCase()];
        if (recipe) {
            setInstructions([`Recipe: ${food}`, ...recipe]);
        } else {
            setInstructions(["Sorry, recipe not found."]);
        }
    };

    const startVoiceSearch = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Voice recognition is not supported in this browser.");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
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

    useEffect(() => {
        if (isCameraOn) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    setVideoStream(stream);
                })
                .catch((err) => console.error("Error accessing camera: ", err));
        } else if (videoStream) {
            videoStream.getTracks().forEach(track => track.stop());
            setVideoStream(null);
        }
    }, [isCameraOn]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchInstructions(searchQuery);
    };

    return (
        <div className="voice-video-container">
            {/* Navbar */}
            <Navbar setPage={() => { }} /> {/* Empty function as we don’t need to change pages in this component */}

            <div className="search-bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a recipe..."
                />
                <button onClick={handleSearchSubmit}>Search</button>
            </div>

            <div className="voice-search-container">
                <button onClick={startVoiceSearch} className="btn-voice">
                    {isListening ? "Listening..." : "Search Recipe by Voice"}
                </button>

                <h2>Food Item: {foodItem}</h2>
                <div>
                    {instructions.length > 0 && (
                        <ul>
                            {instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="video-cooking-container">
                <button onClick={() => setIsCameraOn(!isCameraOn)} className="btn-camera">
                    {isCameraOn ? "Stop Camera" : "Start Cooking with Camera"}
                </button>

                {isCameraOn && (
                    <div className="video-container">
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
                    </div>
                )}

                <div className="step-guide">
                    <h3>AI Cooking Instructions</h3>
                    <p>Use the camera to show your actions. AI will guide you through each step.</p>
                </div>
            </div>
        </div>
    );
};

export default VoiceAndVideoCooking;
