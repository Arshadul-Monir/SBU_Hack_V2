import React from 'react';
import backgroundImage from '../assets/webback.png'; // Import your image
import Matt from '../assets/image000001.jpg';
import Md from '../assets/edit.png';
import Chris from '../assets/me.png';
import Arsh from '../assets/IMG_6815_1.jpg';
import '../styles/About.css';

function About() {
  return (
    <div
      className="About"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1>About Us</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, margin: '0 10px', textAlign: 'center' }}>
          <img src={Matt} alt="Matt" style={{ width: '50vw', maxWidth: '300px', height: 'auto' }}/>
            <p>
            <br/><br/>My name is Matt, I am a junior at Stony Brook University
              studying computer engineering. <br/> 
            </p>
            <img src={Md} alt="Md" style={{ width: '50vw', maxWidth: '300px', height: 'auto' }}/>
            <p>
            <br/><br/>My name is Md, I am a junior at Stony Brook University
              studying Information Systems. <br/> 
            </p>
          </div>
          <div style={{ flex: 1, margin: '0 10px', textAlign: 'center' }}>
          <img src={Chris} alt="Chris" style={{ width: '50vw', maxWidth: '300px', height: 'auto' }} />
            <p>
            <br/><br/>My name is Chris, I am a senior at Stony Brook University
              studying Business and Information Systems. <br/> 
            </p>
            <img src={Arsh} alt="Arsh" style={{ width: '50vw', maxWidth: '300px', height: 'auto' }} />
            <p>
            <br/><br/>My name is Arsh, I am a sophomore at Hunter College
              studying computer science. <br/> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
