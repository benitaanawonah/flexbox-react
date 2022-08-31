import React from 'react';
import { Card } from 'react-bootstrap';
import '../dist/css/Hero4.css';

function Hero4() {
  return (
    <div class="hero4">
                <div class="hero4__pricing-table">
                    <h2 class="hero4__h-price">Pricing Table</h2>
                    <h4 class="hero4__price-text">Home is behind, the world ahead and <br/>there are many paths to tread through <br /> shadows to the edge</h4>
                    <button class="hero4__price-button">Order a Card</button>
                </div>
             <div class="hero4__price-slider">
        <Card className="card" style={{ width: '18rem' }}>
      
      <p className='hero4__p-price'>FREE PLAN</p>
      <h2 class="hero4__h2-price">$0.00</h2>
      <Card.Body className="card-body">
      <p class="hero4__price-text">Grace Period</p>
                          <p class="hero4__price-text">Interest rate per month</p>
                          <p class="hero4__price-text">Cash Withdrawal</p>
                          <p class="hero4__price-text">Card Replenishment</p>
                          <p class="hero4__price-text">No Domain</p>
                          <p class="hero4__price-text">Make instant transfers 24/7</p>
      </Card.Body>
    </Card>

    <Card className="card" style={{ width: '18rem' }}>
      <p className='hero4__p-price'>FREE PLAN</p>
      <h2 class="hero4__h2-price">$0.00</h2>
      <Card.Body className="card-body">
      <p class="hero4__price-text">Grace Period</p>
        <p class="hero4__price-text">Interest rate per month</p>
         <p class="hero4__price-text">Cash Withdrawal</p>
        <p class="hero4__price-text">Card Replenishment</p>
        <p class="hero4__price-text">No Domain</p>
        <p class="hero4__price-text">Make instant transfers 24/7</p>
      </Card.Body>
    </Card>
            </div>
                </div>
  )
}

export default Hero4