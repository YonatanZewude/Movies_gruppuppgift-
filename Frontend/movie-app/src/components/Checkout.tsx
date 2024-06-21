import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PRHp6GtJvNwyypPxV9Q0omrWG2iEQG5duBKIktSM9W8AnbDQajibg9fJejpE94uFk6dSn3r1e3sNnROFn2fZd2500H9Fj4jrm');

const Checkout: React.FC = () => {
  const location = useLocation();
  const { price } = location.state as { price: number };

  const handleCheckout = async () => {
    const response = await fetch('http://localhost:3000/api/v1/checkout/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          price_data: {
            currency: 'sek',
            product_data: {
              name: 'Film',
            },
            unit_amount: price * 100, 
          },
          quantity: 1,
        }],
      }),
    });
    const session = await response.json();

    const stripe = await stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Betala med Stripe</button>
    </div>
  );
};

const StripeWrapper: React.FC = () => (
  <Elements stripe={stripePromise}>
    <Checkout />
  </Elements>
);

export default StripeWrapper;
