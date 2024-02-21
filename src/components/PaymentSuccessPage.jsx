import React, { useRef } from 'react';
import './PaymentSuccessPage.css';
import jsPDF from 'jspdf';
import logoImage from './logo.png';
import CustomerDetails from './CustomerDetails';
import BillingDetails from './BillingDetails';
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const PaymentSuccessPage = ({  }) => {
  const contentRef = useRef(null);
  const [authenticatedUserEmail, setAuthenticatedUserEmail] = useState("");
  const [customerData, setCustomerData] = useState({});
  const [billingData, setBillingData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
            setAuthenticatedUserEmail(user.email);
        } else {
            navigate('./login');
        }
    });

    return () => unsubscribe();
}, []);
  useEffect(() => {
    axios
      .get(
        "https://broadband-billing-default-rtdb.asia-southeast1.firebasedatabase.app/customer/CUSTOMER.json",
        {
          params: {
            email: authenticatedUserEmail,
          },
        }
      )
      .then((response) => {
        const customerData = response.data.filter(
          (customer) => customer.EMAIL_ID === authenticatedUserEmail
        )[0];
        console.log(customerData);
        setCustomerData(customerData);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
    axios
      .get(
        "https://broadband-billing-default-rtdb.asia-southeast1.firebasedatabase.app/payments/PAYMENTS.json",
        {
          params: {
            email: authenticatedUserEmail,
          },
        }
      )
      .then((response) => {
        const billingData = response.data.filter(
          (payment) => payment.EMAIL_ID === authenticatedUserEmail
        )[0];
        console.log(billingData);
        setBillingData(billingData);
      })
      .catch((error) => {
        console.error("Error fetching billing data:", error);
      });
  }, [authenticatedUserEmail]);


  const handlePrint = () => {
    const pdf = new jsPDF();
    const logoWidth = 80; // Adjust as needed
    const logoHeight = 80; // Adjust as needed
    const logoX = pdf.internal.pageSize.getWidth() - logoWidth - 10; // Position from right edge
    const logoY = 10;

    pdf.addImage(logoImage, 'PNG', logoX, logoY, logoWidth, logoHeight);
    
    // Set the starting y position for the content
    let yPos = 20;

    // Add the title
    pdf.text(20, yPos, 'Payment Successful!');
    yPos += 10;

    // Add the message
    pdf.text(20, yPos, 'Thank you for your payment.');
  yPos += 20;

  // Add the billing details
  pdf.text(20, yPos, 'Billing Details:');
  yPos += 10;
  pdf.text(20, yPos, `Monthly Bill: ${billingData.AMOUNT}`);
  yPos += 10;
  pdf.text(20, yPos, `Payment ID: ${billingData.PAYMENT_ID}`);
  yPos += 10;
  pdf.text(20, yPos, `Invoice ID: ${billingData.INVOICE_ID}`);
  yPos += 20;

  // Add the customer details
  pdf.text(20, yPos, 'Customer Details:');
  yPos += 10;
  pdf.text(20, yPos, `Name: ${customerData.NAME}`);
  yPos += 10;
  pdf.text(20, yPos, `Phone Number: ${customerData.PHONE_NO}`);
  yPos += 10;
  pdf.text(20, yPos, `Email: ${customerData.EMAIL_ID}`);
  yPos += 10;
  pdf.text(20, yPos, `Address: ${customerData.ADDRESS}`);
  yPos += 10;
  pdf.text(20, yPos, `Customer ID: ${customerData.CUSTOMER_ID}`);
  yPos += 20;

  // Save the PDF
  pdf.save('payment_success.pdf');
  pdf.autoPrint();
};

  return (
    <div className='background'>
      <div className="center-content" ref={contentRef}>
        <h2 className='payment-title'>Payment Successful!</h2>
        <p>Thank you for your payment.</p>
        
        <div className='dashboard1'>
        <CustomerDetails customerData={customerData} />
       <BillingDetails billingData={billingData} />
       </div>
      </div>
      <button className='print' onClick={handlePrint}>PRINT</button>
    </div>
  );
};

export default PaymentSuccessPage;
