import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Access the details of your invoices with just a click.
        </h1>
        <p className="text-lg mb-8">
          Watch the video below to learn how it works:
        </p>
      </div>

      {/* Video Player Section */}
      <div className="max-w-4xl mx-auto mb-12">
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
        <p className="text-lg mb-6">
          Start using our product right away by clicking on 'Start Chatting'
        </p>
        <Link 
          to="/dashboard"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Download Cashflow Reports
        </Link>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors"
        >
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L2.87 22l4.14-1.07C8.58 21.63 10.24 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14h-2v-2h2v2zm0-3h-2V7h2v6z"/>
          </svg>
          <span>Start Chatting</span>
        </button>
      </div>
    </div>
  );
};

export default Home; 