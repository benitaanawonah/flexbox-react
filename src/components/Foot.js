import React from 'react'
import '../dist/css/foot.css';

function Foot() {
  return (
    <div class="foot">
    <div class="content-1">
     <h3 class="foot__bank">
        <span>m.</span>bank
    </h3>
     <h2 class="foot__bank-1">Quick and easy <br /> Neo Bank</h2>
     <button class="foot__bank-button">Learn more</button>
     <p class="foot__copyright">Copyright mbank. All rights reserved</p>
    </div>
    <div class="content-2">
        <h4 class="foot__products">PRODUCTS</h4>
        <ul class="foot__bank-list">
            <li>Features</li>
            <li>Personal License</li>
            <li>Business License</li>
            <li>Pricing Options</li>
        </ul>
    </div>
    <div class="content-3">
        <h4 class="foot__latest-post">LATEST POSTS</h4>
        <div class="foot__content-top">
          <img class="foot__content-top-img" src="assets/streamlinehq-protect-privacy-user-people-400.PNG" alt="" /> 
          <p class="content-top-p">Protects all document <br /> draft document faster</p> 
        </div>
        <div class="foot__content-top">
            <img class="foot__content-top-img" src="assets/streamlinehq-searching-interface-400.PNG" alt="" /> 
            <p class="content-top-p">Protects all document <br /> draft document faster</p> 
          </div>
    </div>

    
</div>
  )
}

export default Foot