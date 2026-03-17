import React from 'react';
import './message.css';
import { assetPath } from '../utils/assets';
import { Link } from 'react-router-dom';

function Message() {
    const sunriseImage = assetPath('/assets/sunrise-21.png');
    const forestImage = assetPath('/assets/forest-path.png');

    return (
        <div className="message-container">
            <header className="message-header">
                <h1 className="message-title">Advice for Your Bright Future</h1>
                <p className="message-subtitle">Small words for a big journey ahead</p>
            </header>

            <main className="advice-sections">
                <section className="advice-item">
                    <div className="advice-image-wrapper">
                        <img src={sunriseImage} alt="Year 21 Sunrise" className="advice-image" />
                    </div>
                    <div className="advice-content">
                        <h2>Embrace Growth</h2>
                        <p>
                            Like a sprout pushing through the soil, growth takes time and patience. 
                            Don't rush your journey, Kannama. Every small step you take today is 
                            preparing you for a beautiful tomorrow. Trust the process and keep blooming.
                        </p>
                    </div>
                </section>

                <section className="advice-item reverse">
                    <div className="advice-content">
                        <h2>Walk with Courage</h2>
                        <p>
                            The path ahead might seem winding, but remember that you have the strength 
                            within you to face any challenge. Let your heart be your compass, and 
                            never be afraid to explore new horizons. Your future is as bright as your smile.
                        </p>
                    </div>
                    <div className="advice-image-wrapper">
                        <img src={forestImage} alt="The Journey Ahead" className="advice-image" />
                    </div>
                </section>

                <button className='button' >
                    <Link to="/songs">Click here to listen songs</Link>
                </button>


            </main>

           
            <div className="nature-leaf leaf-1">🍃</div>
            <div className="nature-leaf leaf-2">🌿</div>
            <div className="nature-leaf leaf-3">🌱</div>
            <div className="nature-leaf leaf-4">🍀</div>
            <div className="nature-leaf flower-1">🌸</div>
            <div className="nature-leaf flower-2">🌼</div>
            <div className="nature-leaf leaf-5">🍃</div>
            <div className="nature-leaf flower-3">🌺</div>
            <div className="nature-leaf flower-4">🌻</div>
            <div className="nature-leaf flower-5">🌹</div>
            <div className="nature-leaf flower-6">🌷</div>
            <div className="nature-leaf leaf-6">🌿</div>
            <div className="nature-leaf flower-7">💐</div>
            <div className="nature-leaf flower-8">🌸</div>
        </div>
    );
}

export default Message; 
