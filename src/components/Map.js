import React, { Component } from 'react';

class MapContainer extends Component {
  render() {
    const iframeStyle = {
      border: '4px solid black', // Adjust the width of the border as needed
      width: '75%',
      height: '500px',
      
    };

    return (
      <div>
      <iframe
          title="Folium Map"
          src="map.html"  // Path to your saved Folium map
          style={iframeStyle}
        />
      </div>
    );
  }
}

export default MapContainer;