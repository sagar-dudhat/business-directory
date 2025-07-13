import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BusinessListPage() {
  const [businesses, setBusinesses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/business');
        setBusinesses(res.data);
        setFiltered(res.data);

        // Extract unique categories
        const categories = ['All', ...new Set(res.data.map(b => b.category).filter(Boolean))];
        setAllCategories(categories);
      } catch (err) {
        console.error('Failed to fetch businesses:', err);
      }
    };

    fetchBusinesses();
  }, []);

  useEffect(() => {
    let filteredData = businesses;

    if (search.trim()) {
      filteredData = filteredData.filter(biz =>
        biz.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'All') {
      filteredData = filteredData.filter(biz => biz.category === category);
    }

    setFiltered(filteredData);
  }, [search, category, businesses]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Businesses</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full md:w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          {allCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Business cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {filtered.length === 0 ? (
          <p>No businesses found.</p>
        ) : (
          filtered.map(biz => (
            <Link key={biz._id} to={`/business/${biz._id}`} className="block">
              <div className="p-4 border rounded shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold">{biz.name}</h3>
                <p className="text-gray-700">{biz.category}</p>
                <p>{biz.address}</p>
                <p>{biz.phone}</p>
                <a href={biz.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  {biz.website}
                </a>
                <p className="mt-2">{biz.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BusinessListPage;
