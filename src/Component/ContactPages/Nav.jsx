import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            

            <div className="container my-5">
                <div className="text-center mb-4">
                    <h2  style={{fontSize:'45px'}}>Contact Us</h2>
                    <p className='my-3'  style={{fontSize:'20px'}}><strong><Link to="/" className='text-dark text-decoration-none'>Home</Link></strong> / Contact Us</p>
                </div>

                <div className="row text-center text-md-start gy-4 my-3">
                    <div className="col-md-3">
                        <div className="con-icon mx-auto mb-2">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='text-center'>
                            <strong>Store Address</strong>
                            <p className="mb-1">PO Box 16122 Collins Street</p>
                            <p className="mb-0">West Victoria 8007 Australia</p>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="con-icon mx-auto mb-2">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='text-center'>
                            <strong>Call Info</strong>
                            <p className="mb-1">Open a chat or give us a call at</p>
                            <p className="mb-0">+61 3 8376 6284</p>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="con-icon mx-auto mb-2">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='text-center'>
                            <strong>Email Support</strong>
                            <p className="mb-1">Send mail to</p>
                            <p className="mb-0">support@mixtas.com</p>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="con-icon mx-auto mb-2">
                            <i className="fa-solid fa-message"></i>
                        </div>
                        <div className='text-center'>
                            <strong>Live Support</strong>
                            <p className="mb-1">Live chat service</p>
                            <p className="mb-0">https://www.livechat.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
