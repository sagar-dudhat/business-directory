import { useState } from 'react';
import axios from 'axios';

function AddBusinessPage() {
  const [form, setForm] = useState({
    name: '', category: '', address: '', phone: '',
    website: '', description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/business', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Business added!');
    } catch (err) {
      alert('Error: ' + (err.response?.data?.msg || 'Server error'));
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Business</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Business Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="category" placeholder="Category" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
}

export default AddBusinessPage;
