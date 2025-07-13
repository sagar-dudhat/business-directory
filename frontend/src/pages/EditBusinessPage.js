import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditBusinessPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    address: '',
    phone: '',
    website: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/business/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error('Error loading business:', err));
  }, [id]);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:5000/api/business/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/my-businesses');
    } catch (err) {
      console.error('Failed to update:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Business</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'category', 'address', 'phone', 'website', 'description'].map(field => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-2 border rounded"
            required={field !== 'website'}
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}

export default EditBusinessPage;
