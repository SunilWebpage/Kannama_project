import React, { useState } from 'react';
import './marryMe.css';
import { assetPath } from '../utils/assets';

function MarryMe() {
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const [answered, setAnswered] = useState(false);
    const featuredPhoto = assetPath('/assets/images/img-1.jpeg');

    const moveNoButton = () => {
        const padding = 100; // Increased padding to stay further from edges
        const btnWidth = 120;
        const btnHeight = 50;
        
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        
        const maxX = vw - btnWidth - padding;
        const maxY = vh - btnHeight - padding;
        
        // Ensure maxX/maxY are at least padding
        const safeMaxX = Math.max(padding, maxX);
        const safeMaxY = Math.max(padding, maxY);
        
        const x = padding + Math.random() * (safeMaxX - padding);
        const y = padding + Math.random() * (safeMaxY - padding);
        
        setNoButtonStyle({
            position: 'fixed',
            left: `${x}px`,
            top: `${y}px`,
            transition: 'all 0.3s ease',
            zIndex: 9999
        });
    };

    if (answered) {
        return (
            <div className="marry-container celebration">
                <h1 className="marry-title">I Knew You'd Say Yes! ❤️</h1>
                <p className="marry-subtitle">I love you so much, Kannama!</p>
                <div className="polaroid p12 celebration-photo">
                    <img src={featuredPhoto} alt="Love" className="w-100" />
                </div>
                <div className="marry-subtitle">Marry me Soon Muahh</div>
                
                <div className="nature-leaf leaf-1">🍃</div>
                <div className="nature-leaf flower-1">🌸</div>
                <div className="nature-leaf leaf-2">🌿</div>
                <div className="nature-leaf flower-2">🌹</div>
            </div>
        );
    }

    return (
        <div className="marry-container">
            <div className="proposal-box">
                <h1 className="marry-title">Will you marry me, Kannama?</h1>
                <div className="button-group">
                    <button 
                        className="marry-button yes" 
                        onClick={() => setAnswered(true)}
                    >
                        Yes
                    </button>
                    <button 
                        className="marry-button no" 
                        style={noButtonStyle}
                        onMouseEnter={moveNoButton}
                        onClick={moveNoButton}
                    >
                        No
                    </button>
                </div>
            </div>
            
            <div className="nature-leaf leaf-1">🍃</div>
            <div className="nature-leaf flower-1">🌸</div>
            <div className="nature-leaf leaf-2">🌿</div>
            <div className="nature-leaf flower-2">🌹</div>
            <div className="nature-leaf leaf-3">🌱</div>
            <div className="nature-leaf flower-3">🌻</div>
        </div>
    );
}

export default MarryMe;
