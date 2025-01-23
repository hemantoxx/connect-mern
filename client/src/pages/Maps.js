import React from 'react';

const Maps = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <iframe
        src="/map.html" // Path to the HTML file in the public folder
        title="Interactive Map"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          marginTop: '60px',
        }}
      ></iframe>
    </div>
  );
};

export default Maps;
