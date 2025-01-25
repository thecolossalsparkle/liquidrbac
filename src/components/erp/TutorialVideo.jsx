import React, { useState, useRef } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import TallyVideo from '../../assets/videos/Tally_erp_setup.mp4';

const TutorialVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = 17;
  const slideContainerRef = useRef(null);
  const videoRef = useRef(null);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => Math.max(1, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await slideContainerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <Card className="w-full shadow-sm overflow-hidden">
      <div className="p-4 sm:p-6 space-y-4">
        <div 
          ref={slideContainerRef}
          className={`relative ${!showVideo ? 'block' : 'hidden'}`}
        >
          <img 
            src={require(`../../assets/images/${currentSlide}.png`)}
            alt={`Tutorial Slide ${currentSlide}`}
            className="w-full h-auto rounded-lg"
          />
          
          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 hover:opacity-100 transition-opacity">
            <button 
              onClick={handlePrevSlide}
              disabled={currentSlide === 1}
              className="p-2 rounded-full bg-white/30 hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <span className="text-2xl">&#60;</span>
            </button>
            
            <button 
              onClick={handleNextSlide}
              disabled={currentSlide === totalSlides}
              className="p-2 rounded-full bg-white/30 hover:bg-white/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <span className="text-2xl">&#62;</span>
            </button>
          </div>

          {/* Fullscreen Button */}
          <button 
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all opacity-0 hover:opacity-100"
          >
            <span className="text-lg">{isFullscreen ? '⤌' : '⤢'}</span>
          </button>

          {/* Slide Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 opacity-0 hover:opacity-100 transition-opacity">
            {[...Array(totalSlides)].map((_, index) => (
              <button 
                key={index + 1}
                onClick={() => setCurrentSlide(index + 1)}
                className={`w-2 h-2 rounded-full transition-all
                  ${currentSlide === index + 1 
                    ? 'bg-white/90 scale-110' 
                    : 'bg-white/40 hover:scale-110'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className={`w-full ${showVideo ? 'block' : 'hidden'}`}>
          <video 
            ref={videoRef}
            controls
            className="w-full rounded-lg"
            controlsList="nodownload"
          >
            <source src={TallyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <Button 
            variant="primary"
            onClick={() => setShowVideo(!showVideo)}
            className="w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5"
          >
            {showVideo ? 'Show Tutorial Slides' : 'Show Tutorial Video'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TutorialVideo; 