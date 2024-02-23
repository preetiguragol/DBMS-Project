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
        "https://broadband-billing-default-rtdb.asia-southeast1.firebasedatabase.app/invoice/INVOICE.json",
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
    const logoWidth = 80;
    const logoHeight = 80;
    const logoX = pdf.internal.pageSize.getWidth() - logoWidth - 10;
    const logoY = 10;
  
    pdf.addImage(logoImage, 'PNG', logoX, logoY, logoWidth, logoHeight);
  
    // Set the starting y position for the content
    let yPos = 20;
  
    // Add a border around the content
    const contentWidth = 180; // Adjust as needed
    const contentHeight = 260; // Adjust as needed
    pdf.setDrawColor(0); // Set border color to black
    pdf.setLineWidth(1); // Set border width
    pdf.rect(15, yPos, contentWidth, contentHeight);
  
    // Add the title
    pdf.text(20, yPos + 10, 'Payment Successful!');
    yPos += 20;
  
    // Add the message
    pdf.text(20, yPos, 'Thank you for your payment.');
    yPos += 20;


    pdf.text(20, yPos, 'From');
    yPos += 10;
    pdf.text(20, yPos, `Netwise`);
    yPos += 10;
    pdf.text(20, yPos, `990011887765 `);
    yPos += 10;
    pdf.text(20, yPos, `netwise23.gmail.com `);
    yPos += 10;
    const addressText1 = `Address: Sir M. Visvesvaraya Institute of Technology `;
    const addressLines1 = pdf.splitTextToSize(addressText1, contentWidth - 40);
    addressLines1.forEach(line => {
      pdf.text(20, yPos, line);
      yPos += 10;
    });
    yPos += 10;

    pdf.text(20, yPos, 'To:');
    yPos += 10;
    pdf.text(20, yPos, `Name: ${customerData.NAME}`);
    yPos += 10;
    pdf.text(20, yPos, `Phone Number: ${customerData.PHONE_NO}`);
    yPos += 10;
    pdf.text(20, yPos, `Email: ${customerData.EMAIL_ID}`);
    yPos += 10;
    const addressText = `Address: ${customerData.ADDRESS}`;
    const addressLines = pdf.splitTextToSize(addressText, contentWidth - 40);
    addressLines.forEach(line => {
      pdf.text(20, yPos, line);
      yPos += 10;
    });
    pdf.text(20, yPos, `Customer ID: ${customerData.CUSTOMER_ID}`);
    yPos += 20;
  
    // Add the billing details
    pdf.text(20, yPos, 'Billing Details:');
    yPos += 10;
    pdf.text(20, yPos, `Invoice_ID:  ${billingData.INVOICE_ID}`);
    yPos += 10;
    pdf.text(20, yPos, `Customer_ID:  ${billingData.CUSTOMER_ID}`);
    yPos += 10;
    pdf.text(20, yPos, `Service_Type:  ${billingData.SERVICE_TYPE}`);
    yPos += 10;
    pdf.text(20, yPos, `Amount Paid: Rs ${billingData.TOTAL_AMT}`);
    yPos += 10;
    pdf.text(20, yPos, `Email-ID:  ${billingData.EMAIL_ID}`);
    yPos += 10;
    pdf.text(20, yPos, `In-Date: ${billingData.IN_DATE}`);
    yPos += 20;
  
    // Add the customer details
    
  
    // Save the PDF
    pdf.save('payment_success.pdf');
    pdf.autoPrint();
  };
  

return (
  <div className='background'>
    <div className="center-content" ref={contentRef} style={{ border: '2px solid #ddd', padding: '20px' }}>
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