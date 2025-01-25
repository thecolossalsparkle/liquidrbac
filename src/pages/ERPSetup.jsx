import React from 'react';
import WelcomeCard from '../components/erp/WelcomeCard';
import TutorialVideo from '../components/erp/TutorialVideo';
import TallyNote from '../components/erp/TallyNote';

const ERPSetup = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        <WelcomeCard />
        <TutorialVideo />
        <TallyNote />
      </div>
    </div>
  );
};

export default ERPSetup; 