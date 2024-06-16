import React, { useEffect } from 'react';
import '../style/Contact.css'; 

const Contact: React.FC = () => {
  useEffect(() => {
    const initMap = () => {
      console.log('initMap called');
      const map = new window.google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: { lat: 59.3333, lng: 18.0116 }, 
          zoom: 14,
          mapId: 'YOUR_MAP_ID_HERE', 
        }
      );

      if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 59.3333, lng: 17.983333 }, 
          title: 'Hello World!',
        });
      } else {
        console.error('AdvancedMarkerElement is not available');
      }
    };

    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    
    if (!existingScript) {
      window.initMap = initMap;

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyARTpUnf3BOFtlQuYc4DgCdk3Np_jt5HtM&callback=initMap&libraries=marker`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        console.log('Google Maps script loaded');
        if (window.initMap) {
          window.initMap();
        }
      };

      script.onerror = (e) => {
        console.error('Error loading Google Maps script', e);
      };

      document.body.appendChild(script);
    } else {
      
      if (window.google && window.google.maps) {
        initMap();
      } else {
        window.initMap = initMap;
      }
    }

    return () => {
      if (existingScript) {
        window.initMap = undefined;
      }
    };
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Gustavslundsvägen 151 D </p>
        <p>167 51 Bromma</p>
        <p>Email: contact@movie.com</p>
        <p>Phone: 070 0000 00</p>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default Contact;
