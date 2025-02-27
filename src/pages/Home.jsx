import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 px-4 py-4 sm:py-8 overflow-y-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 px-2 leading-tight">
            Access the details of<br className="sm:hidden" /> your invoices with<br className="sm:hidden" /> just a click.
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            Watch the video below to learn how it works:
          </p>
        </div>

        {/* Video Player Section */}
        <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
            <iframe
              src="https://drive.google.com/file/d/15pEgWedqPb32V8wNUlQMXZ9xIRso-K8o/preview"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Product Demo Video"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full"><p class="text-gray-600">Video unavailable. Please try again later.</p></div>';
              }}
            ></iframe>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-base sm:text-lg mb-6">
            Start using our product right away by clicking on 'Start Chatting'
          </p>
          <Link 
            to="/dashboard"
            className="w-[80%] sm:w-auto inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-base"
          >
            Download Cashflow Reports
          </Link>
        </div>

        {/* WhatsApp Chat Button */}
        <div className="fixed bottom-6 right-6 sm:right-8 z-50">
          <button 
            className="bg-green-500 text-white p-3 sm:px-6 sm:py-3 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors shadow-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span className="hidden sm:inline">Start Chatting</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home; 