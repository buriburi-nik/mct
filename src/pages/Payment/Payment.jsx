// components/Payment/Payment.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { storeContext } from '../../storeContext';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const { getTotals } = useContext(storeContext);
  const { total } = getTotals();

  // Payment form fields
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  // Status states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Prepare the payment data
    const paymentData = {
      cardNumber,
      expiry,
      cvv,
      name,
      total,
    };

    try {
      // Call your payment API
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment failed. Please try again.');
      }

      const result = await response.json();
      setSuccess('Payment processed successfully!');
      console.log('Payment result:', result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    // Navigate back or to a confirmation page after payment
    navigate('/');
  };

  return (
    <div className="payment-modal">
      <div className="payment-form">
        <h2>Payment Details</h2>
        {/* Display Total Amount */}
        <p className="payment-total">Total Amount: ${total.toFixed(2)}</p>
        
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number"
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              required
            />
          </div>
          <div className="form-group">
            <label>Name on Card</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name as it appears on card"
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button onClick={handleClose} style={{ marginTop: '1rem' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Payment;
