import React from 'react';
import './photos.css';
import './message.css'; // Reusing leaf animations
import { assetPath } from '../utils/assets';

function Photos() {
    const collageOne = assetPath('/assets/collage-1.png');
    const collageTwo = assetPath('/assets/collage-2.png');
    const sunrise21 = assetPath('/assets/sunrise-21.png');
    const forestPath = assetPath('/assets/forest-path.png');
    const cornerDecor = assetPath('/assets/corner-decor.png');
    const natureOne = assetPath('/assets/nature-1.png');

    return (
        <div className="photos-container">
            <header className="photos-header">
                <h1 className="photos-title">Memories & Moments</h1>
                <p className="photos-subtitle">A collection of beautiful days</p>
            </header>

            <main className="collage-grid">
                <div className="polaroid p1">
                    <img src={collageOne} alt="Sunset" />
                </div>
                <div className="polaroid p2">
                    <img src={sunrise21} alt="21st Birthday" />
                </div>
                <div className="polaroid p3">
                    <img src={collageTwo} alt="Beach Heart" />
                </div>
                <div className="polaroid p4">
                    <img src={forestPath} alt="The Journey" />
                </div>
                <div className="polaroid p5">
                    <img src={cornerDecor} alt="Flowers" />
                </div>
                <div className="polaroid p6">
                    <img src={natureOne} alt="Growth" />
                </div>
                <div className="polaroid p7">
                    <img src={collageOne} alt="Mountain Peak" />
                </div>
                <div className="polaroid p8">
                    <img src={sunrise21} alt="New Beginnings" />
                </div>
                <div className="polaroid p9">
                    <img src={collageTwo} alt="Ocean Love" />
                </div>
                <div className="polaroid p10">
                    <img src={forestPath} alt="Quiet Path" />
                </div>
                <div className="polaroid p11">
                    <img src={cornerDecor} alt="Floral Details" />
                </div>
                <div className="polaroid p12">
                    <img src={natureOne} alt="Fresh Bloom" />
                </div>
                <div className="polaroid p13">
                    <img src={collageOne} alt="Sunset Glow" />
                </div>
                <div className="polaroid p14">
                    <img src={sunrise21} alt="Beginning" />
                </div>
                <div className="polaroid p15">
                    <img src={collageTwo} alt="Love Sand" />
                </div>
                <div className="polaroid p16">
                    <img src={forestPath} alt="Adventure" />
                </div>
                <div className="polaroid p17">
                    <img src={natureOne} alt="Spring" />
                </div>
                <div className="polaroid p18">
                    <img src={collageOne} alt="Vibe" />
                </div>
            </main>

            {/* Nature Decorations */}
            <div className="nature-leaf leaf-1">🍃</div>
            <div className="nature-leaf leaf-2">🌿</div>
            <div className="nature-leaf leaf-3">🌱</div>
            <div className="nature-leaf leaf-4">🍀</div>
            <div className="nature-leaf flower-1">🌸</div>
            <div className="nature-leaf flower-2">🌼</div>
            <div className="nature-leaf flower-3">🌺</div>
            <div className="nature-leaf flower-4">🌻</div>
        </div>
    );
}

export default Photos;
