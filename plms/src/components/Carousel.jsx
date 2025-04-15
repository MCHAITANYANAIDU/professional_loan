import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../assets/styles/Carousel.css';


const LandingCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        transitionTime={500}
        showArrows={true}
        emulateTouch
        dynamicHeight={false}
      >
        <div>
          <img src="https://5.imimg.com/data5/XL/QR/MY-9831908/unsecured-personal-loan-for-professional-500x500.jpg" alt="Professional Loans" />
          <p className="legend">Loans Tailored for Professionals 🧑‍⚕️</p>
        </div>
        <div>
          <img src="https://www.shutterstock.com/shutterstock/photos/599533220/display_1500/stock-photo-loan-approval-word-cloud-concept-599533220.jpg" alt="Quick Approval" />
          <p className="legend">Fast Approval & Flexible Plans ⚡</p>
        </div>
        <div>
          <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/09/emi.jpg" alt="EMI" />
          <p className="legend">Low EMIs, High Peace of Mind 💸</p>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/indian-businessman-working-office-desk_53876-141306.jpg" alt="Professional Growth" />
          <p className="legend">Finance Your Professional Growth 🚀</p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/03/26/09/54/startup-690679_960_720.jpg" alt="Startup Loan" />
          <p className="legend">Startups Welcome – Loans for Your Vision 💼</p>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
