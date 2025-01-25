import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const WelcomeCard = () => {
  return (
    <Card className="w-full shadow-sm">
      <div className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl text-gray-800 font-semibold text-center mb-4 sm:mb-6">
          Welcome Aboard! Your Journey to{' '}
          <span className="text-blue-600">Hassle-Free Invoice Processing</span>{' '}
          Starts Now.
        </h1>
        <div className="flex justify-center">
          <Button 
            variant="primary"
            onClick={() => window.open('/download/tally-requisites', '_blank')}
            className="w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5"
          >
            Download Tally Requisites
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard; 