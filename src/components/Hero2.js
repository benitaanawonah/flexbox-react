import React from "react";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../dist/css/Hero2.css';


function Hero2() {
  return (
    <div class="hero2">
                    <div class="hero2__money-gram">
                        <h2 class="hero2__gram">MoneyGram</h2>
                        <h4 class="hero2__gram-text">
                            MoneyGram - an international system of <br /> urgent money transfers operating in 200 <br /> countries around the world
                        </h4>
                        <button class="hero2__gram-button">About Me</button>
                    </div>
                <div className="hero2__gram-slider">
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img src="assets/streamlinehq-wireframe-development-400.PNG" class="hero2__img-slide card-img-top" alt="..." />
      <Card.Body className="hero2__card-body">
        <Card.Title className="hero2__card-title">Instant Transfer</Card.Title>
        <Card.Text className="hero2__card-text">Make instant transfers 24/7</Card.Text>
      </Card.Body>
    </Card>

    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img src="assets/streamlinehq-tweet-something-social-media-400.PNG" class="hero2__img-slide card-img-top" alt="..." />
      <Card.Body className="hero2__card-body">
        <Card.Title className="hero2__card-title">Instant Transfer</Card.Title>
        <Card.Text className="hero2__card-text">Make instant transfers 24/7</Card.Text>
      </Card.Body>
    </Card>


    
    </div>
                    
                </div>
                
  )
}

export default Hero2;