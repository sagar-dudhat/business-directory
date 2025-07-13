import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AddBusinessPage from './pages/AddBusinessPage';
import EditBusinessPage from './pages/EditBusinessPage';
import BusinessListPage from './pages/BusinessListPage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import MyBusinessesPage from './pages/MyBusinessesPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col"> {/* full height container */}

        <Navbar /> {/* Always visible */}

        <main className="flex-1 container mx-auto px-4 py-6"> {/* content takes available space */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-business" element={<ProtectedRoute><AddBusinessPage /></ProtectedRoute>} />
            <Route path="/edit-business/:id" element={<ProtectedRoute><EditBusinessPage /></ProtectedRoute>} />
            <Route path="/business/:id" element={<BusinessDetailPage />} />
            <Route path="/businesses" element={<BusinessListPage />} />
            <Route path="/my-businesses" element={<ProtectedRoute><MyBusinessesPage /></ProtectedRoute>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>

        <Footer /> {/* Always at the bottom */}
      </div>
    </Router>
  );
}

export default App;
