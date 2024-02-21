import React from 'react';
// import data from 'src\firebase.js';

const BillingDetails = ({ billingData }) => {
    return (
        <div className="billing-details">
            <h2>Billing Information</h2>
            <p>Payment_ID: {billingData?.PAYMENT_ID}</p>
            <p>Monthly Bill: {billingData?.AMOUNT}</p>
            <p>Balance Due: {billingData?.BALANCE_DUE}</p>
            <p>Invoice_ID: {billingData?.INVOICE_ID}</p> 
        </div>
    );
}


export default BillingDetails;
