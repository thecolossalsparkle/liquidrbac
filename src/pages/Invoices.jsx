import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Invoices = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Access the details of your invoices with just a click.</h1>
      
      <p className="text-center">Watch the video below to learn how it works:</p>
      
      <Card className="aspect-video">
        <div className="relative h-full">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <Button
              variant="primary"
              size="large"
              className="flex items-center gap-2"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Play Tutorial
            </Button>
          </div>
        </div>
      </Card>

      <div className="fixed bottom-8 right-8">
        <Button
          variant="primary"
          size="large"
          className="flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          Start Chatting
        </Button>
      </div>
    </div>
  );
};

export default Invoices; 