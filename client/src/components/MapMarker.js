import React from 'react';

const MapMarker = ({ latitude, longitude }) => {
  const googleMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019929374978!2d${longitude - 0.01}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3e8c9e3%3A0x2ef134d4b44e9839!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1599823987374!5m2!1sen!2sus`;

  return (
    <div>
      <h1>Our Location</h1>
      <div style={{ width: '100%', height: '544px' }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={googleMapUrl}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default MapMarker;
