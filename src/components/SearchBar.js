import React from 'react';

function SearchBar() {
  return (
    <div style={{ textAlign: 'center' }}>
      <input type="text" placeholder="Search..." style={{ width: '300px', padding: '10px', borderRadius: '4px', border: '1px solid black', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
    </div>
  );
}

export default SearchBar;
