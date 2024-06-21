import React from 'react';
import '../style/Success.css';

const Success: React.FC = () => {
  return (
    <div className="success-container">
      <h1>Betalning Lyckades!</h1>
      <p>Tack för ditt köp! Din betalning har genomförts framgångsrikt. För att fortsätta handla, vänligen klicka på knappen "Home" högst upp på sidan.</p>
    </div>
  );
};

export default Success;
