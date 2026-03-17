import React from 'react';
import './wish.css';
import { assetPath } from '../utils/assets';
import { Link } from 'react-router-dom';

function Wish() {
    const wishPhoto = assetPath('/assets/images/img-3.jpeg');

    return (
        <div className="wish-container">
            <header className="wish-hero">
                <h1 className="wish-title">My Wishes for You</h1>
                <div className="decorative-divider" style={{ margin: '0 auto' }}></div>
            </header>

            <main>
                <section className="wish-section">
                    <p className="verse-text">
                        "Set me as a seal upon your heart, as a seal upon your arm; for love is as strong as death."
                        <br />
                        <span style={{ fontSize: '1rem', fontStyle: 'normal' }}>— Song of Solomon 8:6</span>
                    </p>
                    <div className="decorative-divider"></div>
                    <p className="love-message">
                        My love, just as this verse says, you are forever sealed in my heart. My love for you grows stronger with each passing day, and I promise to cherish and protect what we have forever.
                    </p>
                </section>

                <section className="wish-section">
                    <p className="verse-text">
                        "Above all, clothe yourselves with love, which binds us all together in perfect harmony."
                        <br />
                        <span style={{ fontSize: '1rem', fontStyle: 'normal' }}>— Colossians 3:14</span>
                    </p>
                    <div className="decorative-divider"></div>
                    <p className="love-message">
                        You bring such harmony and peace into my life. Thank you for being the love that binds my world together. I wish for us to always grow in this perfect harmony.
                    </p>
                </section>

                <section className="wish-section">
                    <p className="verse-text">
                        "I have found the one whom my soul loves."
                        <br />
                        <span style={{ fontSize: '1rem', fontStyle: 'normal' }}>— Song of Solomon 3:4</span>
                    </p>
                    <div className="decorative-divider"></div>
                    <p className="love-message">
                        Every day I am reminded that I've found my soulmate in you. You are the greatest blessing I could have ever asked for, and I love you more than words can express.
                    </p>
                </section>

                <div>
                    <div className="polaroid p12  top-350 right-154 h-500 fixed">
                        <img src={wishPhoto} alt="Fresh Bloom" className="w-100 h-500" />
                    </div>

                </div>


                <button className="button"><Link to="/message">You Have Some Message</Link></button>


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

export default Wish;
