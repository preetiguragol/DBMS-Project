import React, { useState, useEffect } from 'react';
 

const CustomerDetails = ({ customerData }) => {
    return (
        <div className="customer-details">
            <h2>Customer Details</h2>
            <p>Name: {customerData.name}</p>
            <p>Email: {customerData.email}</p>
            <p>Address: {customerData.address}</p>
            <p>Phone Number: {customerData.phoneNumber}</p>
            <p>Customer_ID: {customerData.customerId}</p>
        </div>
    );
}

export default CustomerDetails;
