import React from 'react';
import backgroundImage from '../assets/webback.png'; // Import your image
import Map from '../components/Map';
import '../styles/Home.css';

function Home() {
  return (
    <div
    className="Home"
     style={{
      backgroundImage: `url(${backgroundImage})`, // Use the imported image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '130vh',
      width: '100%',
    }}>
      <div>
        <h1>Welcome to the Pollution Tracker</h1>
        <p>
          Learn about the Pollution around Long Island.<br/>
          You can make a difference!
        </p>
        <p>
          <br/>
        </p>
        <Map />
      </div>
    </div>
  );
}

export default Home;
