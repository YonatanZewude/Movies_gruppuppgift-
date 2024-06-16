import React from 'react';

const TrackButton: React.FC = () => {
  const handleClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        category: 'User Interaction',
        action: 'Click',
        label: 'Tracked Button'
      });
    }
  };

  return (
    <button onClick={handleClick}>Track this button</button>
  );
};

export default TrackButton;
