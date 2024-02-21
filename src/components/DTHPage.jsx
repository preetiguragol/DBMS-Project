import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import PaymentModal from "./PaymentModal";
import { useState } from "react";
import "./PrepaidPage.css";
function PrepaidPage() {
  const plansAndOffers = [
    {
      id: 1,
      title: "Premium",
      description:
      "Up to 250 Mbps, designed for heavy internet usage, gaming, and high-definition streaming.",
      imageUrl:
        "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_deaf_blind_TV.png",
        price: "₹999"
    },
    {
      id: 2,
      title: "Business",
      description:
        "Up to 500 Mbps, tailored for business operations with increased data needs.",
      imageUrl:
        "https://mixkit.imgix.net/videos/preview/mixkit-woman-working-with-a-laptop-computer-at-the-office-28751-0.jpg?q=80&auto=format%2Ccompress",
        price: "₹899"
    },
    {
      id: 3,
      title: "Gaming",
      description:
        "Up to 150 Mbps with low latency.Dedicated gaming support, optimized for online gaming",
      imageUrl:
        "https://kryptronix.in/wp-content/uploads/2023/02/Benefits-of-Updating-your-gaming-pc-on-a-regular-basis.jpg",
        price: "₹599"
    },
  ];
    const plansAndOffers1 = [
    {
      id: 4,
      title: "Student",
      description:
        "Up to 50 Mbps 200GB per month.Discounted rates for students, online learning support.",
      imageUrl:
        "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home.jpg",
        price: "₹399"
    },
    {
      id: 5,
      title: "Standard",
      description:
        "Unlimited internet upto 100mbps, unlimited local/STD calls",
      imageUrl:
        "https://www.pluggedin.com/wp-content/uploads/2020/09/0124BlogTop-2.png",
        price: "₹599"
    },
    {
      id: 6,
      title: "Basic",
      description: "Unlimited internet upto 40mbps,unlimited local/STD calls",
      imageUrl: "https://sm.mashable.com/mashable_in/seo/4/4892/4892_a1zc.jpg",
      price: "₹399"
    },
    {
      id: 7,
      title: "Entertainment",
      description:
        "Unlimited internet upto 200mbps,unlimited local/STD calls,with benefits of ott subscriptions",
      imageUrl:
        "https://img-cdn.thepublive.com/fit-in/1200x675/vnd/media/post_banners/wp-content/uploads/2021/09/A-booster-dose-for-OTT1.jpg",
        price: "₹799"
    },
    {
      id: 8,
      title: "Infinity",
      description: "Unlimited internet upto 200mbps,unlimited local/STD calls",
      imageUrl:
        "https://media.assettype.com/nationalherald%2F2021-12%2F28966a77-027c-4688-894a-200505c8eb2f%2F7_in_10_parents_confess_their_phone_use_hurting_relations_with_kids_Report.jpg?rect=53%2C0%2C1067%2C600&auto=format%2Ccompress&fmt=webp&w=1200",
        price: "₹599"
    },
  ];
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePayNow = () => {
    setShowPaymentModal(true);
  };
  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentSubmit = (cardDetails) => {
    console.log("Payment initiated with card details:", cardDetails);
    navigate("/payment-success");
  };

  const carouselSettings = {
    dots: false,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="prepaid-head">DTH PLANS</h1>
      <Slider {...carouselSettings}>
        {plansAndOffers.map((plan) => (
          <div key={plan.id} className="plan-slide">
            <div className="plan-image">
              <img src={plan.imageUrl} alt={plan.title} />
            </div>
            <div className="plan-details">
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-description">{plan.description}</p>
              <h3 className="plan-title">{plan.price}</h3>
            </div>
            <div className="pay-now-container">
              <button className="pay-now-button" onClick={handlePayNow}>
                Buy Now{" "}
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <Slider {...carouselSettings}>
        {plansAndOffers1.map((plan1) => (
          <div key={plan1.id} className="plan-slide">
            <div className="plan-image">
              <img src={plan1.imageUrl} alt={plan1.title} />
            </div>
            <div className="plan-details">
              <h3 className="plan-title">{plan1.title}</h3>
              <p className="plan-description">{plan1.description}</p>
              <h3 className="plan-title">{plan1.price}</h3>
            </div>
            <div className="pay-now-container">
              <button className="pay-now-button" onClick={handlePayNow}>
                Buy Now{" "}
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {showPaymentModal && (
        <PaymentModal
          onClose={handleCloseModal}
          onCancel={handleCloseModal}
          onSubmit={handlePaymentSubmit}
        />
      )}
      <Footer />
    </div>
  );
}

export default PrepaidPage;
