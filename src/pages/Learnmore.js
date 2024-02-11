import React from 'react';
import backgroundImage from '../assets/webback.png';
import pollution from '../assets/LearnMoreBackDrop.jpg';
import '../styles/Learnmore.css';

function LearnMore() {
  return (
    <div
      className="LearnMore"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '130vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div id = "learn" style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
        <div>
          <h1>Learn About Our Goals</h1>
          <p>
            Our goal is to teach and inform people more <br /> about pollution.
            Even in places where it seems <br /> like  there are no pollution,
            there is a lot of<br /> pollution.
          </p>
        </div>
        <div className="pollutionpic">
          <img src={pollution} alt="pollution" style={{ width: '70vw', maxWidth: '500px', height: 'auto' }} />
        </div>
        </div>
        <div>
          <h2>Why does knowing about pollution matter?</h2>
          <p1>
          Understanding pollution is crucial for the 
          well-being of our environment and ourselves. 
          Pollution, whether in the air, water, or soil, 
          has widespread effects on ecosystems and human health. 
          By knowing about its sources and consequences, 
          we can make informed choices to reduce our impact, 
          conserve resources, and support initiatives that promote 
          a cleaner, healthier planet. In essence, awareness of 
          pollution empowers us to be responsible stewards of our 
          environment, contributing to a sustainable and brighter 
          future.
          </p1>
        </div>
      </div>
  );
}



export default LearnMore;