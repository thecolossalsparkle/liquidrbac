import React, { useState, useRef, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import TallyVideo from '../../assets/videos/Tally_erp_setup.mp4';

const TutorialVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = 17;
  const slideContainerRef = useRef(null);
  const videoRef = useRef(null);
  const autoPlayDelay = 3000;

  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev === 1 ? totalSlides : prev - 1);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying && !showVideo) {
      intervalId = setInterval(() => {
        setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
      }, autoPlayDelay);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, showVideo, totalSlides]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-all duration-[2500ms] ease-in-out transform"
              style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
            >
              {[...Array(totalSlides)].map((_, index) => (
                <img 
                  key={index + 1}
                  src={require(`../../assets/images/${index + 1}.png`)}
                  alt={`Tutorial Slide ${index + 1}`}
                  className={`w-full h-auto flex-shrink-0 transition-all duration-[2500ms] ease-in-out
                    ${index + 1 === currentSlide 
                      ? 'opacity-100 blur-0 scale-100' 
                      : 'opacity-80 blur-[1px] scale-[0.98]'}`}
                />
              ))}
            </div>
            
            {/* Controls Overlay */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-2">
                <button 
                  onClick={handlePrevSlide}
                  className="p-2.5 rounded-full bg-black/80 hover:bg-black/95 transition-all shadow-lg"
                >
                  <span className="text-3xl text-white">&#60;</span>
                </button>
                
                <button 
                  onClick={handleNextSlide}
                  className="p-2.5 rounded-full bg-black/80 hover:bg-black/95 transition-all shadow-lg"
                >
                  <span className="text-3xl text-white">&#62;</span>
                </button>
              </div>

              {/* Fullscreen Button */}
              <button 
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-black/95 transition-all shadow-lg"
              >
                <span className="text-lg text-white">
                  {isFullscreen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Slide Dots - outside the image */}
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(totalSlides)].map((_, index) => (
              <button 
                key={index + 1}
                onClick={() => setCurrentSlide(index + 1)}
                className={`w-1.5 h-1.5 rounded-full transition-all
                  ${currentSlide === index + 1 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
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