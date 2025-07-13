import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, category);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search businesses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '60%' }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: '0.5rem', marginLeft: '1rem' }}
      >
        <option value="">All Categories</option>
        <option value="IT Services">IT Services</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
        <option value="Education">Education</option>
      </select>

      <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>Search</button>
    </form>
  );
};

export default SearchBar;
