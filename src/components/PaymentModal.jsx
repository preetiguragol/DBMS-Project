import React, { useState } from 'react';
import './PaymentModal.css';

const PaymentModal = ({ onClose, onCancel, onSubmit }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = sanitizeInput(value, name); // Apply input sanitization

    setCardDetails({ ...cardDetails, [name]: sanitizedValue });
  };

  const validateCardDetails = () => {
  const errors = [];

  if (!cardDetails.cardNumber.match(/^\d{12}$/)) {
    errors.push('Card number must be 12 digits and contain only numbers.');
  }

  if (!cardDetails.cardName.match(/^[a-zA-Z ]+$/)) {
    errors.push('Card name must contain only letters and spaces.');
  }

  if (!cardDetails.expiryDate.match(/^\d{2}\/\d{2}$/)) {
    errors.push('Expiry date must be in MM/YY format.');
  }

  if (!cardDetails.cvv.match(/^\d{3}$/)) {
    errors.push('CVV must be 3 digits and contain only numbers.');
  }

  return errors;
};

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateCardDetails();

    if (errors.length > 0) {
      // Display error messages to the user
      console.error('Validation errors:', errors);
      return; // Prevent submission if errors exist
    }

    onSubmit(cardDetails);
  };

  const handleCancel = () => {
    onCancel();
  };

  // Input sanitization function
  const sanitizeInput = (value, name) => {
    const sanitizedValue = name === 'cardNumber' ? value.replace(/[^0-9]/g, '') : value;
    return sanitizedValue;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Enter Card Details</h2>
        <form onSubmit={handleSubmit}>
          <input
          
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            maxLength="12"
            required
          />
          <input
          
            type="text"
            name="cardName"
            placeholder="Name on Card"
            value={cardDetails.cardName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={cardDetails.expiryDate}
            onChange={handleInputChange}
            maxLength="5"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleInputChange}
            maxLength="3"
            required
          />
          <button type="submit">Pay Now</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
