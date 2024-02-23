import React from 'react';
// import data from 'src\firebase.js';

const BillingDetails = ({ billingData }) => {
    return (
        <div className="billing-details">
            <h2>Billing Information</h2>
            <p>Invoice_ID: {billingData?.INVOICE_ID}</p>
            <p>Customer_ID: {billingData?.CUSTOMER_ID}</p>
            <p>Service: {billingData?.SERVICE_TYPE}</p>
            <p>Balance Due:Rs {billingData?.TOTAL_AMT}</p>
            <p>In_Date: {billingData?.IN_DATE}</p>
            {/* <p>Email_ID: {billingData?.EMAIL_ID}</p>  */}
        </div>
    );
}


export default BillingDetails;
