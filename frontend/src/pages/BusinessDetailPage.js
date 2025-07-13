import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BusinessDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [biz, setBiz] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/business/${id}`)
      .then(res => setBiz(res.data))
      .catch(err => console.error('Error loading business:', err));
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this business?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/business/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/businesses');
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete business');
    }
  };

  const handleEdit = () => {
    navigate(`/edit-business/${biz._id}`);
  };

  if (!biz) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-2">{biz.name}</h2>
      <p><strong>Category:</strong> {biz.category}</p>
      <p><strong>Address:</strong> {biz.address}</p>
      <p><strong>Phone:</strong> {biz.phone}</p>
      <p><strong>Website:</strong> <a href={biz.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{biz.website}</a></p>
      <p className="mt-2"><strong>Description:</strong> {biz.description}</p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BusinessDetailPage;
