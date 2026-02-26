import React from 'react';
import { Link } from 'react-router-dom';

const FaqContent = () => {
    const faqData = [
        { id: 1, question: 'What is your return policy?', answer: 'We accept returns within 30 days of delivery. Items must be unused and in their original packaging.' },
        { id: 2, question: 'Do you offer international shipping?', answer: 'Yes, we ship internationally. Shipping charges and delivery time may vary.' },
        { id: 3, question: 'How can I track my order?', answer: 'You can track your order using the tracking link sent to your email after dispatch.' },
        { id: 4, question: 'Can I change my shipping address?', answer: 'Yes, before the order is dispatched. Please contact our support team to update it.' },
        { id: 5, question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, UPI, net banking, and PayPal.' },
        { id: 6, question: 'Can I update my payment method?', answer: 'Yes, as long as the order hasn’t been processed. Contact support immediately to make changes.' },
        { id: 7, question: 'Do you offer gift wrapping?', answer: 'Yes, we offer complimentary gift wrapping on select items. Choose the option at checkout.' },
        { id: 8, question: 'How do I cancel my order?', answer: 'Orders can be cancelled within 2 hours of placement. Visit your account page to cancel.' },
        { id: 9, question: 'How can I contact support?', answer: 'You can contact our support team via the contact form or by calling our helpline number.' },
        { id: 10, question: 'How can I contact support?', answer: 'You can contact our support team via the contact form or by calling our helpline number.' }
    ];

    const leftFAQs = faqData.slice(0, 5);
    const rightFAQs = faqData.slice(5);

    const renderAccordion = (data, parentId) =>
        data.map((faq) => (
            <div className="accordion-item mb-3" key={faq.id}>
                <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse${faq.id}`}
                    >
                        {faq.question}
                    </button>
                </h2>
                <div
                    id={`collapse${faq.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent={`#${parentId}`}
                >
                    <div className="accordion-body">
                        {faq.answer}
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="container ">
            <div className="text-center my-3">
                <h2 style={{ fontSize: '60px', fontWeight: 'normal' }}>FAQs</h2>
                <p className="text-secondary">
                    <strong>
                        <Link to="/" className="text-decoration-none text-dark">Home</Link>
                    </strong> / FAQs
                </p>
            </div>
            <div className='my-5'>
                {/* Responsive layout: stack on sm/md, two-column on lg+ */}
                <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                        <div className="accordion" id="faqAccordionLeft">
                            {renderAccordion(leftFAQs, 'faqAccordionLeft')}
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 mb-4">
                        <div className="accordion" id="faqAccordionRight">
                            {renderAccordion(rightFAQs, 'faqAccordionRight')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqContent;
