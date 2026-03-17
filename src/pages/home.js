
import React from 'react';
import './home.css';
import './message.css';

function Home() {
    return (
        <div className="home-container">
            <img src="/public/assets/corner-decor.png" alt="" className="corner-photo left" />
            <img src="/public/assets/corner-decor.png" alt="" className="corner-photo right" />
            
            <section className="hero-section">
                <h1 className="birthday-title">Happy Birthday, Kannama</h1>
                
                <div className="decorative-divider"></div>
                
                <p className="wishes-text">
                    "On this special day, I want you to know how much you mean to me. 
                    You are the light in my life, and I'm so grateful for every moment we share. 
                    May your day be as beautiful and wonderful as you are."
                </p>

                <div className="heart-icon">❤️</div>
                <div className="button"><a href="/wish" >Click Me To See More</a></div>


            </section>



<div>

    {/* <div className="polaroid p12 home_photo top-350 left-304 ">
        <img src="/public/assets/images/img-1.jpeg" alt="Fresh Bloom" className="w-200" />
    </div> */}

     <div className="polaroid p12 home_photo top-350 right-304  ">
        <img src={`${process.env.PUBLIC_URL}/assets/images/img-1.jpeg`} alt="Image 1" className="w-200" />
    </div>
</div>


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

export default Home;
