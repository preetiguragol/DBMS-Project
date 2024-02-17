import React from 'react';
import './PaymentSuccessPage.css'; 

const PaymentSuccessPage = ({ onBack }) => {
    return (
        <div className='background'>
        <div className="center-content"> 
            <h2>Payment Successful!</h2>
            <p>Thank you for your payment.</p>
        </div>
        </div>
    );
};

export default PaymentSuccessPage;
