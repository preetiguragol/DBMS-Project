import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import CustomerDetails from './CustomerDetails';
import BillingDetails from './BillingDetails';
import Footer from './Footer';

const Dashboard = () => {
    const [customerData, setCustomerData] = useState({});
    const [billingData, setBillingData] = useState({});
    const plansAndOffers = [
        { id: 1, title: 'Standard', description: 'Unlimited internet upto 100mbps, unlimited local/STD calls ', imageUrl: 'https://www.pluggedin.com/wp-content/uploads/2020/09/0124BlogTop-2.png' },
        { id: 2, title: 'Basic', description: 'Unlimited internet upto 40mbps,unlimited local/STD calls', imageUrl: 'https://sm.mashable.com/mashable_in/seo/4/4892/4892_a1zc.jpg' },
        { id: 4, title: 'Entertainment', description: 'Unlimited internet upto 200mbps,unlimited local/STD calls,with benefits of ott subscriptions', imageUrl: 'https://img-cdn.thepublive.com/fit-in/1200x675/vnd/media/post_banners/wp-content/uploads/2021/09/A-booster-dose-for-OTT1.jpg' },
        { id: 3, title: 'Infinity', description: 'Unlimited internet upto 200mbps,unlimited local/STD calls', imageUrl: 'https://media.assettype.com/nationalherald%2F2021-12%2F28966a77-027c-4688-894a-200505c8eb2f%2F7_in_10_parents_confess_their_phone_use_hurting_relations_with_kids_Report.jpg?rect=53%2C0%2C1067%2C600&auto=format%2Ccompress&fmt=webp&w=1200' },
        { id: 5, title: 'Professional', description: 'Unlimited internet upto 300mbps,unlimited local/STD calls,with benefits of OTT subscriptions', imageUrl: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home.jpg' },
    ];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    useEffect(() => {
        axios.get('/api/customer') // Modify the URL as per  Django backend API endpoint 
            .then(response => {
                setCustomerData(response.data);
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });

        axios.get('/api/billing') // Modify the URL as per  Django backend API endpoint
            .then(response => {
                setBillingData(response.data);
            })
            .catch(error => {
                console.error('Error fetching billing data:', error);
            });
    }, []);

    const handlePayNow = () => {
        // Add functionality to handle payment
        console.log('Payment initiated.');
    };

    return (
        <div>
            
            <Slider {...carouselSettings}>
                {plansAndOffers.map(plan => (
                    <div key={plan.id} className="plan-slide">
                        <div className="plan-image">
                            <img src={plan.imageUrl} alt={plan.title} />
                        </div>
                        <div className="plan-details">
                            <h3 className="plan-title">{plan.title}</h3>
                            <p className="plan-description">{plan.description}</p>
                        </div>
                        <div className="pay-now-container">
                            <button className="pay-now-button" onClick={handlePayNow}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="dashboard">
                <CustomerDetails customerData={customerData} />
                <BillingDetails billingData={billingData} />
            </div>
            <div className="pay-now-container1">
                            <button className="pay-now-button1" onClick={handlePayNow}>Pay Now</button>
                        </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
