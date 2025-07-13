import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function MyBusinessesPage() {
  const [myBusinesses, setMyBusinesses] = useState([]);
  const navigate = useNavigate();

  const fetchBusinesses = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/business', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userId = JSON.parse(atob(token.split('.')[1])).id;
      const filtered = res.data.filter(biz => biz.userId === userId);
      setMyBusinesses(filtered);
    } catch (err) {
      console.error('Error fetching businesses:', err);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this business?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/business/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyBusinesses(myBusinesses.filter(b => b._id !== id));
    } catch (err) {
      console.error(err);
      alert('Delete failed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Businesses</h2>
      {myBusinesses.length === 0 ? (
        <p>No businesses found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {myBusinesses.map(biz => (
            <div key={biz._id} className="p-4 border rounded shadow">
              <h3 className="text-lg font-semibold">{biz.name}</h3>
              <p className="text-gray-700">{biz.category}</p>
              <p>{biz.address}</p>
              <div className="flex space-x-4 mt-4">
                <Link
                  to={`/edit-business/${biz._id}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(biz._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBusinessesPage;
