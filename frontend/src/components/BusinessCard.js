import React from 'react';

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">{business.name}</h3>
      <p className="text-sm text-gray-700 mt-1">{business.description}</p>
      <p className="text-xs text-gray-500 mt-2"><strong>Category:</strong> {business.category}</p>
      <p className="text-xs text-gray-500"><strong>Location:</strong> {business.location}</p>
      {business.website && (
        <a
          href={business.website}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm mt-3 inline-block hover:underline"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

export default BusinessCard;
