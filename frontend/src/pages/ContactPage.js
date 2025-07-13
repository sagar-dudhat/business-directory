import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 leading-relaxed mb-2">
        Have a question or need support? Reach out to us at:
      </p>
      <ul className="text-gray-700">
        <li><strong>Email:</strong> support@business-directory.com</li>
        <li><strong>Phone:</strong> +91-98765-43210</li>
      </ul>
    </div>
  );
};

export default ContactPage;
