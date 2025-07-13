import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusinessCard from '../components/BusinessCard';

const HomePage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/business')
      .then(res => setBusinesses(res.data))
      .catch(err => console.error('Error loading businesses:', err));
  }, []);

  // Get unique categories from businesses for dropdown
  const categories = Array.from(new Set(businesses.map(b => b.category)));

  // Filtering logic
  const filtered = businesses.filter(b =>
    (b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.address.toLowerCase().includes(search.toLowerCase())) &&
    (selectedCategory === '' || b.category === selectedCategory)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Explore Local Businesses</h2>

      {/* Search + Dropdown Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, category or address..."
          className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map(business => (
            <BusinessCard key={business._id} business={business} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No businesses found.</p>
      )}
    </div>
  );
};

export default HomePage;
