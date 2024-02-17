import React, { useState } from 'react';
import './PaymentModal.css';
import BillingDetails from './BillingDetails';

const PaymentModal = ({ onClose, onCancel, onSubmit }) => {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(cardDetails);
    };

    const handleCancel = () => {
        onCancel(); 
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Close</button>
                <h2>Enter Card Details</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={cardDetails.cardNumber}
                        onChange={handleInputChange}
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
                        placeholder="Expiry Date"
                        value={cardDetails.expiryDate}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={cardDetails.cvv}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Pay Now</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal;
