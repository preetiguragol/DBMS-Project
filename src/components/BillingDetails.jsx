import React from 'react';

const BillingDetails = ({ billingData }) => {
    return (
        <div className="billing-details">
            <h2>Billing Information</h2>
            <p>Current Plan: {billingData.currentPlan}</p>
            <p>Monthly Bill: {billingData.monthlyBill}</p>
            <p>Balance Due: {billingData.balanceDue}</p>
            <p>Payment_ID: {billingData.paymentId}</p>
            <p>Invoice_ID: {billingData.invoiceId}</p>
        </div>
    );
}

export default BillingDetails;
