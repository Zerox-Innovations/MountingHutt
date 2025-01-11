import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const PaymentView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get('bookingId'); // Retrieve bookingId from URL

  const { contextState } = useAuth()
  const { authToken,formData } = contextState;
  console.log('Form Data in PaymentView:', formData);
  

  const [paymentLink, setPaymentLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Form Data in PaymentView (useEffect):', formData);  // Debug the formData here
    if (bookingId && formData) {
      handleSubmit();  // Trigger the request when formData is available
    }
  }, [formData, bookingId]);  // Add formData as dependency
  
  

  const handleSubmit = async () => {
    console.log('Submitting Form Data:', formData);  // Log formData before sending the request
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_SERVER}payment/payment-create/?booking_id=${bookingId}`,
        formData,  // Send formData as part of the request payload
        {
          headers: {
            'Authorization': `Bearer ${authToken.access}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 201) {
        setPaymentLink(response.data.payment_link);
      }
    } catch (err) {
      console.error('Error creating payment link:', err.response);
      setError('Failed to create payment link');
    } finally {
      setLoading(false);
    }
  };
  
  


  return (
    <div>
      <h1>Payment Page</h1>

      {/* Loading indicator or error message */}
      {loading && <p>Processing your payment...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show payment link if available */}
      {paymentLink && (
        <div>
          <p>Payment Link Created:</p>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">Click here to pay</a>
        </div>
      )}
    </div>
  );
};

export default PaymentView;
