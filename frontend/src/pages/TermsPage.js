import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-gray-700 mb-4">
        These are placeholder terms and conditions. You may customize them later based on your project needs.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>You agree to not misuse the platform.</li>
        <li>Business listings must be accurate and owned by you.</li>
        <li>We reserve the right to remove listings.</li>
        <li>Your data will be handled according to our privacy policy.</li>
      </ul>
    </div>
  );
};

export default TermsPage;
