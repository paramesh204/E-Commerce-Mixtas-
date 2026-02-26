import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import bagicon from '../../assets/images/bagicon.jpg';
import searchicon from '../../assets/images/searchicon.jpg';
import hearticon from '../../assets/images/likeicon.jpg';
import usericon from '../../assets/images/usericon.jpg';

const FaqHeader = () => {
    return (
        <>
            {/* Top Banner */}
            <div className="container my-3 d-none d-lg-block">
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Free shipping on US orders $100+ & Free exchanges</p>
                    <div className='d-flex gap-3 align-items-center'>
                        {/* Language Dropdown */}
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                English
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Spanish</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </div>

                        {/* Currency Dropdown */}
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                USD
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">INR</a></li>
                                <li><a className="dropdown-item" href="#">EUR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* Header Section */}
            <div className="container d-flex justify-content-between align-items-center py-2">
                {/* Left: Hamburger & Logo */}
                <div className="d-flex align-items-center gap-3">
                    {/* Hamburger for small screens */}
                    <div className="d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                        <i className="fa-solid fa-bars fs-4"></i>
                    </div>

                    {/* Logo */}
                    <Link to="/">
                        <img src={logo} alt="Logo" className="img-fluid" style={{ width: '120px' }} />
                    </Link>
                </div>

                {/* Center: Menu Links (visible on large screens) */}
                <div className="d-none d-lg-flex gap-4">
                    <Link className='text-decoration-none text-dark' to="/">Home</Link>
                    <Link className='text-decoration-none text-dark' to="/About">About</Link>
                    <Link className='text-decoration-none text-dark' to="/Shop">Shop</Link>
                    <Link className='text-decoration-none text-dark' to="/FAQs">FAQs</Link>
                    <Link className='text-decoration-none text-dark' to="/Contact">Contact</Link>
                </div>

                {/* Right: Icons */}
                <div className="d-flex gap-3 align-items-center">
                    <img src={usericon} alt="User" style={{ width: '25px' }} />
                    <img src={searchicon} alt="Search" style={{ width: '30px' }} />
                    <img src={hearticon} alt="Wishlist" style={{ width: '25px' }} />
                    <div style={{ position: 'relative' }}>
                        <img src={bagicon} alt="Cart" style={{ width: '33px' }} />
                        <div style={{ position: 'absolute', top: '-8px', left: '28px' }}>
                            <span style={{
                                fontSize: '13px',
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '3px 6px',
                                borderRadius: '50%'
                            }}>
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offcanvas Menu for Mobile */}
            <div className="offcanvas offcanvas-start w-50" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div><Link className="d-block w-100 mb-2" to="/">Home</Link></div>
                    <div><Link className="d-block w-100 mb-2" to="/About">About</Link></div>
                    <div><Link className="d-block w-100 mb-2" to="/Shop">Shop</Link></div>
                    <div><Link className="d-block w-100 mb-2" to="/FAQs">FAQs</Link></div>
                    <div><Link className="d-block w-100 mb-2" to="/Contact">Contact</Link></div>
                </div>
            </div>
        </>
    );
};

export default FaqHeader;
