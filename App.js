import React, { useState } from 'react';
import './App.css';
import SignIn from './signIn';
import Home from './home.js';
import CookingAssistant from './InteractiveCooking.js';
import IngredientBooking from './IngredientBooking.js';
import Checkout from './Checkout.js';
import RecipeSearchPage from './IngredientManagement.js';

function App() {
  const [page, setPage] = useState('welcome');
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  const handleStartClick = () => {
    setPage('signin');
  };

  const goToCheckout = (cartItems, total) => {
    setCart(cartItems);
    setTotalBill(total);
    setPage('Checkout');
  };

  const goBackToIngredientBooking = () => {
    setPage('ingredients');
  };

  const goBackToHome = () => {
    setPage('home');
  };

  console.log('Current Page:', page); // Log to track page state

  return (
    <div className={`App ${page === 'welcome' ? 'welcome-page' : ''} ${page === 'home' ? 'home-page' : ''}`}>
      {page === 'welcome' && (
        <header className="App-header">
          <div className="image-container">
            <img
              src="https://img.freepik.com/fotos-premium/ingredients-for-cooking-food-background-with-herbs-and-vegetables-top-view-on-white-background_937503-1941.jpg"
              alt="background"
            />
          </div>

          <img
            src="https://th.bing.com/th/id/OIP.J1H-kUBL5zwuMFd6vEe-hwHaHa?w=980&h=980&rs=1&pid=ImgDetMain"
            className="App-logo"
            alt="logo"
          />

          <div className="bottom-container">
            <p>Welcome to the world of cooking</p>
            <button className="App-link" onClick={handleStartClick}>
              Start
            </button>
          </div>
        </header>
      )}

      {page === 'signin' && <SignIn setPage={setPage} />}
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'cooking' && <CookingAssistant setPage={setPage} />}
      {page === 'ingredients' && <IngredientBooking setPage={goBackToHome} />}
      {page === 'Checkout' && <Checkout cart={cart} totalBill={totalBill} setPage={goBackToIngredientBooking} />}
      {page === 'management' && <RecipeSearchPage setPage={setPage} />}
    </div>
  );
}

export default App;
