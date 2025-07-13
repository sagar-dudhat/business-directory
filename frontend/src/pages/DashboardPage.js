import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (      
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h2>
      <p>You are logged in. You can:</p>
      <ul className="list-disc pl-5 mt-3">
        <li><Link to="/add-business" className="text-blue-600">Add a New Business</Link></li>
        <li><Link to="/my-businesses" className="text-blue-600">View My Businesses</Link></li>
      </ul>
    </div>
  );
}

export default DashboardPage;
