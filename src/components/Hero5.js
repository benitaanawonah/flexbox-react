import React from 'react';
import '../dist/css/Hero5.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Hero5() {
  return (
    <div class="hero5">
            <h2 class="hero5__h2">
                Start Earning. Start Saving. <br /> Download it today.
            </h2>
            <div class="hero5__earn-slider">
            <Card className="card" style={{ width: '18rem' }}>     
          <Card.Body className="hero5__earn-body">
         <Card.Title className="hero5__earn-title">Download from Appstore</Card.Title>
         <Button variant="primary" className='hero5__earn-button'>Download Now</Button>
        <Card.Img src="assets/streamlinehq-coding-development-400.PNG" class="hero5__img-slide card-img-top" alt="..." />
      </Card.Body>
    </Card>

    <Card className="card" id='down' style={{ width: '18rem' }}>
    <Card.Img src="assets/streamlinehq-tweet-something-social-media-400.PNG" class="img-slide card-img-top hero5__img-earn" alt="..." />
    
      <Card.Body className="hero5__earn-body">
      <Card.Title className="hero5__earn-text">Download on Google Play</Card.Title>
        <Button variant="primary" className='hero5__earn-button'>Download Now</Button>
      </Card.Body>
    </Card>
            </div>
    </div>        
  )
}

export default Hero5