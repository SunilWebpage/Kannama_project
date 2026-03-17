import React from 'react';
import './photos.css';
import './message.css'; // Reusing leaf animations
import { assetPath } from '../utils/assets';

function Photos() {
    const collageOne = assetPath('/assets/images/img-1.jpeg');
    const collageTwo = assetPath('/assets/images/img-2.jpeg');
    const sunrise21 = assetPath('/assets/images/img-3.jpeg');
    const forestPath = assetPath('/assets/images/img-4.jpg');
    const cornerDecor = assetPath('/assets/images/img-5.jpg');
    const natureOne = assetPath('/assets/images/img-6.jpg');
    const natureTwo = assetPath('/assets/images/img-7.jpg');
    const natureThree = assetPath('/assets/images/img-8.jpg');
    const natureFour = assetPath('/assets/images/img-9.jpg');
    const natureFive = assetPath('/assets/images/img-10.jpg');
    const natureSix = assetPath('/assets/images/img-11.jpg');
    const natureSeven = assetPath('/assets/images/img-12.jpg');
    const natureEight = assetPath('/assets/images/img-13.jpg');
    const natureNine = assetPath('/assets/images/img-14.jpg');
    const natureTen = assetPath('/assets/images/img-15.jpg');

    return (
        <div className="photos-container">
            <header className="photos-header">
                <h1 className="photos-title">Memories & Moments</h1>
                <p className="photos-subtitle">A collection of Your beauty</p>
            </header>

            <main className="collage-grid">
                <div className="polaroid p1">
                    <img src={collageOne} alt="Sunset"className='w-100' />
                </div>
                <div className="polaroid p2">
                    <img src={sunrise21} alt="21st Birthday" className='w-100' />
                </div>
                <div className="polaroid p3">
                    <img src={collageTwo} alt="Beach Heart" className='w-100' />
                </div>
                <div className="polaroid p4">
                    <img src={forestPath} alt="The Journey" className='w-100' />
                </div>
                <div className="polaroid p5">
                    <img src={natureEight} alt="Flowers" className='w-100' />
                </div>
                <div className="polaroid p6">
                    <img src={natureOne} alt="Growth" className='w-100' />
                </div>
                <div className="polaroid p7">
                    <img src={natureSix} alt="Mountain Peak" className='w-100' />
                </div>
                <div className="polaroid p8">
                    <img src={sunrise21} alt="New Beginnings" className='w-100' />
                </div>
                <div className="polaroid p9">
                    <img src={natureSeven} alt="Ocean Love" className='w-100' />
                </div>
                <div className="polaroid p10">
                    <img src={natureFive} alt="Quiet Path" className='w-100' />
                </div>
                <div className="polaroid p11">
                    <img src={cornerDecor} alt="Floral Details" className='w-100' />
                </div>
                <div className="polaroid p12">
                    <img src={natureTwo} alt="Fresh Bloom" className='w-100' />
                </div>
                <div className="polaroid p13">
                    <img src={natureThree} alt="Sunset Glow" className='w-100' />
                </div>
                <div className="polaroid p14">
                    <img src={natureFour} alt="Beginning" className='w-100' />
                </div>
                <div className="polaroid p15">
                    <img src={natureNine} alt="Love Sand" className='w-100' />
                </div>
                <div className="polaroid p16">
                    <img src={forestPath} alt="Adventure" className='w-100' />
                </div>
                <div className="polaroid p17">
                    <img src={natureOne} alt="Spring" className='w-100' />
                </div>
                <div className="polaroid p18">
                    <img src={natureTen} alt="Vibe" className='w-100' />
                </div>
                
            </main>


        <button className='button'>
            <a href="/marry">Click To Answer</a>
        </button>
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
