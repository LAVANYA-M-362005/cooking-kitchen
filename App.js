// App.js
import React, { useState } from 'react';
import './App.css';
import SignIn from './signIn';
import Home from './home.js'; // Import Home component
import CookingAssistant from './InteractiveCooking.js'; // Import the CookingAssistant component

function App() {
  const [page, setPage] = useState('welcome'); // State to manage pages

  const handleStartClick = () => {
    setPage('signin'); // Navigate to Sign-In page
  };

  return (
    <div className="App">
      {page === 'welcome' && (
        <header className="App-header">
          <div className="image-container" style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="https://img.freepik.com/fotos-premium/ingredients-for-cooking-food-background-with-herbs-and-vegetables-top-view-on-white-background_937503-1941.jpg"
              width="1500"
              height="600"
              alt="background"
            />
            <img
              src="https://th.bing.com/th/id/OIP.J1H-kUBL5zwuMFd6vEe-hwHaHa?w=980&h=980&rs=1&pid=ImgDetMain"
              className="App-logo"
              alt="logo"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
              }}
            />
          </div>
         <div className="initial" style={{ position: 'relative', display: 'inline-block' }}>
          <p>Welcome to the world of cook</p>
          <div className="start-container">
            <button className="App-link" onClick={handleStartClick}>
              Start
            </button>
            </div>
          </div>
        </header>
      )}
      {page === 'signin' && <SignIn setPage={setPage} />} {/* Pass setPage to SignIn */}
      {page === 'home' && <Home setPage={setPage} />} {/* Render Home page when setPage('home') */}
      {page === 'cooking' && <CookingAssistant setPage={setPage} />} {/* Render CookingAssistant page */}
    </div>
  );
}

export default App;
