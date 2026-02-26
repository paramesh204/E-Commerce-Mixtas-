import React from 'react';

const Touch = () => {
    return (
        <div className="container my-5">
            <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 'bold' }}>Get In Touch</h2>

            <div className="row g-5">
                {/* Left: Contact Form */}
                <div className="col-md-6">
                    <div className="row g-4">
                        <div className="col-12">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="form-control border-0 border-bottom rounded-0 p-3"
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="form-control border-0 border-bottom rounded-0 p-3"
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="form-control border-0 border-bottom rounded-0 p-3"
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                placeholder="Address (optional)"
                                className="form-control border-0 border-bottom rounded-0 p-3"
                            />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-dark px-4 py-2 mt-2">Send Message</button>
                        </div>
                    </div>
                </div>

                {/* Right: Google Map */}
                <div className="col-md-6">
                    <div className="ratio ratio-16x9 h-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497701.02881225734!2d77.03993460501106!3d12.95333150457995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1753854838375!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Touch;
