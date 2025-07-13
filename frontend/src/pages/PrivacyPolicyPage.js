import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        This is a placeholder privacy policy. Customize based on your data practices.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>We collect only essential information (e.g. name, email).</li>
        <li>We do not share your data with third parties.</li>
        <li>You can request data deletion anytime.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;
