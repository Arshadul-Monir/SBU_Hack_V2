import React from 'react';
import backgroundImage from '../assets/webback.png'; // Import your image
import SearchBar from '../components/SearchBar';
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
        <h1>Welcome to the Home Page</h1>
        <p>
          Learn about the Pollution around Long Island.<br/>
          You can make a difference!
        </p>
        <SearchBar />
        <p>
          <br/>
        </p>
        <Map />
      </div>
    </div>
  );
}

export default Home;
