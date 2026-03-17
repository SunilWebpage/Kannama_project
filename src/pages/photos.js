import React from 'react';
import './photos.css';
import './message.css'; // Reusing leaf animations

function Photos() {
    return (
        <div className="photos-container">
            <header className="photos-header">
                <h1 className="photos-title">Memories & Moments</h1>
                <p className="photos-subtitle">A collection of beautiful days</p>
            </header>

            <main className="collage-grid">
                <div className="polaroid p1">
                    <img src="/public/assets/collage-1.png" alt="Sunset" />
                </div>
                <div className="polaroid p2">
                    <img src="/public/assets/sunrise-21.png" alt="21st Birthday" />
                </div>
                <div className="polaroid p3">
                    <img src="/public/assets/collage-2.png" alt="Beach Heart" />
                </div>
                <div className="polaroid p4">
                    <img src="/public/assets/forest-path.png" alt="The Journey" />
                </div>
                <div className="polaroid p5">
                    <img src="/public/assets/corner-decor.png" alt="Flowers" />
                </div>
                <div className="polaroid p6">
                    <img src="/public/assets/nature-1.png" alt="Growth" />
                </div>
                <div className="polaroid p7">
                    <img src="/public/assets/collage-1.png" alt="Mountain Peak" />
                </div>
                <div className="polaroid p8">
                    <img src="/public/assets/sunrise-21.png" alt="New Beginnings" />
                </div>
                <div className="polaroid p9">
                    <img src="/public/assets/collage-2.png" alt="Ocean Love" />
                </div>
                <div className="polaroid p10">
                    <img src="/public/assets/forest-path.png" alt="Quiet Path" />
                </div>
                <div className="polaroid p11">
                    <img src="/public/assets/corner-decor.png" alt="Floral Details" />
                </div>
                <div className="polaroid p12">
                    <img src="/public/assets/nature-1.png" alt="Fresh Bloom" />
                </div>
                <div className="polaroid p13">
                    <img src="/public/assets/collage-1.png" alt="Sunset Glow" />
                </div>
                <div className="polaroid p14">
                    <img src="/public/assets/sunrise-21.png" alt="Beginning" />
                </div>
                <div className="polaroid p15">
                    <img src="/public/assets/collage-2.png" alt="Love Sand" />
                </div>
                <div className="polaroid p16">
                    <img src="/public/assets/forest-path.png" alt="Adventure" />
                </div>
                <div className="polaroid p17">
                    <img src="/public/assets/nature-1.png" alt="Spring" />
                </div>
                <div className="polaroid p18">
                    <img src="/public/assets/collage-1.png" alt="Vibe" />
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