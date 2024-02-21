import React, { useRef } from 'react';
import './PaymentSuccessPage.css';
import jsPDF from 'jspdf';
import logoImage from './logo.png';

const PaymentSuccessPage = ({ onBack }) => {
  const contentRef = useRef(null);

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
    pdf.text(20, yPos, 'Monthly Bill: 999.0');
    yPos += 10;
    pdf.text(20, yPos, 'Payment ID: 765001');
    yPos += 10;
    pdf.text(20, yPos, 'Invoice ID: 89765001');
    yPos += 20;

    // Add the customer details
    pdf.text(20, yPos, 'Customer Details:');
    yPos += 10;
    pdf.text(20, yPos, 'Name: Shubha Acharya');
    yPos += 10;
    pdf.text(20, yPos, 'Phone Number: 8392725529');
    yPos += 10;
    pdf.text(20, yPos, 'Email: shubha23@gmail.com');
    yPos += 10;
    pdf.text(20, yPos, 'Address: #107, 10th Cross, Duo Marvel Layout, Ananthapura, Yelahanka, Bangalore- 560064');
    yPos += 10;
    pdf.text(20, yPos, 'Customer ID: 1001');
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
        <div className="details-container">
          <div className="billing-details1">
            <h2>Billing Details</h2>
            <p>Monthly Bill:999.0 </p>
            <p>Payment_ID:765001 </p>
            <p>Invoice_ID:89765001 </p>
          </div>
          <div className="customer-details1">
            <h2>Customer Details</h2>
            <p>Name:Shubha Acharya </p>
            <p>Phone Number:8392725529 </p>
            <p>Email:shubha23@gmail.com </p>
            <p>Address:#107, 10th Cross, Duo Marvel Layout, Ananthapura, Yelahanka, Bangalore- 560064 </p>
            <p>Customer_ID:1001 </p>
          </div>  
        </div>
      </div>
      <button className='print-button' onClick={handlePrint}>PRINT</button>
    </div>
  );
};

export default PaymentSuccessPage;
