import React from 'react';
import '../../App.css';
import { footerImages } from '../../assets/assets';

const Footer = () => {
   

    return (
        <div className="container-fluid mt-4 overflow-hidden bg-dark text-light">
            <div className="container py-4">
                <div className="row gy-4">
                    {/* Brand Column */}
                    <div className="col-12 col-md-4">
                        <h2>Mixtas</h2>
                        <p>
                            Whether you're a trendsetter, a minimalist, or an adventure at heart,
                            Mixtas has something for everyone. Our diverse range of styles caters to
                            various personas.
                        </p>
                        <div className="d-flex gap-3 iconsss">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>

                    {/* About Us */}
                    <div className="col-6 col-md-2">
                        <h5>About Us</h5>
                        <p>Our Story</p>
                        <p>Mission & Values</p>
                        <p>Meet the Team</p>
                        <p>Sustainability Efforts</p>
                        <p>Brand Partnerships</p>
                        <p>Influencer Collaborations</p>
                    </div>

                    {/* Accessibility */}
                    <div className="col-6 col-md-2">
                        <h5>Accessibility</h5>
                        <p>Accessibility Statement</p>
                        <p>Site Map</p>
                        <p>Web Accessibility Options</p>
                        <p>ADA Compliance</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>

                    {/* Join Community */}
                    <div className="col-6 col-md-2">
                        <h5>Join Our Community</h5>
                        <p>VIP Membership</p>
                        <p>Loyalty Program</p>
                        <p>Customer Reviews</p>
                        <p>Style Forums</p>
                        <p>Job Openings</p>
                        <p>Culture and Values</p>
                    </div>

                    {/* Newsletter */}
                    <div className="col-12 col-md-2">
                        <h5>Let's Get in Touch</h5>
                        <p className="pb-2">
                            Sign up for our newsletter and receive 10% off your
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control p-2 rounded-1"
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container">
                <hr />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start py-3 gap-3">
                    <p className="mb-0">
                        © 2024 Mixtas. All rights reserved. Developed by Apsara Rose Delina.
                    </p>
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                        {footerImages.map((value, index) => (
                            <img
                                key={index}
                                src={value.image}
                                alt=""
                                className="rounded-3 img-fluid"
                                style={{ maxWidth: '250px', height: 'auto' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
