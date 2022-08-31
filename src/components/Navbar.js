import React from 'react';
import '../dist/css/Navbar.css';

function Navbar() {
  return (
    <nav class="navbar">
        <h2 class="navbar__h2">
            <span class="navbar__span">
                m.
            </span>
            bank
        </h2>
        <ul>
           <li><a href="">Exchange</a></li>
           <li><a href="">Cards</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Tarrifs</a></li> 
        </ul>
        <div class="navbar__section2">
            <ul>
                <li>En</li>
            </ul>
            <button class="navbar__button">Order a Card</button>
        </div>
    </nav>
  )
}

export default Navbar