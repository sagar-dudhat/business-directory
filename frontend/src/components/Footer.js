import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 space-y-6">

        {/* CTA */}
        <div>
          <p className="font-semibold">Want to promote your business?</p>
          <a href="/add-business" className="text-blue-600 hover:underline">
            Click here to register your business
          </a>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <p>Business Directory is a platform to help users discover and register local businesses.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: support@bizdirectory.com</p>
            <p>Phone: +91-9876543210</p>
          </div>

          {/* Terms & Privacy */}
          <div>
            <h3 className="font-semibold mb-2">Terms & Privacy</h3>
            <a href="/terms" className="block text-blue-600 hover:underline">Terms & Conditions</a>
            <a href="/privacy" className="block text-blue-600 hover:underline">Privacy Policy</a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <a href="#" className="block hover:underline">Facebook</a>
            <a href="#" className="block hover:underline">Twitter</a>
            <a href="#" className="block hover:underline">LinkedIn</a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs mt-6">
          <p>© 2025 Business Directory</p>
          <div className="flex space-x-3 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
