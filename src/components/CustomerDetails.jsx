import React, { useState, useEffect } from 'react';
 

const CustomerDetails = ({ customerData }) => {
    return (
        <div className="customer-details">
            <h2>Customer Details</h2>
            <p>Name: {customerData?.NAME}</p>
            <p>Address: {customerData?.ADDRESS}</p>
            <p>Phone Number: {customerData?.PHONE_NO}</p>
            <p>Customer_ID: {customerData?.CUSTOMER_ID}</p>
            <p>Email: {customerData?.EMAIL_ID}</p>
        </div>
    );
}


export default CustomerDetails;
