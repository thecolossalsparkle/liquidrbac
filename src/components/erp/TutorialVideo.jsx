import React, { useState, useRef } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import styled from 'styled-components';
import TallyVideo from '../../assets/videos/Tally_erp_setup.mp4';

const VideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const SlideContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 5px;
`;

const NavigationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${SlideContainer}:hover & {
    opacity: 1;
  }
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 15px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? '0.3' : '1'};
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${SlideContainer}:hover & {
    opacity: 1;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  padding: 15px;
  width: 100%;
  max-width: 900px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 0;
  margin-bottom: 0;
`;

const FullscreenButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0;
  z-index: 10;

  ${SlideContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const FullscreenIcon = styled.span`
  font-size: 18px;
`;

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

  const handleDotClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
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

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevSlide();
    } else if (e.key === 'ArrowRight') {
      handleNextSlide();
    } else if (e.key === 'Escape') {
      setIsFullscreen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Card style={{ 
      padding: '15px',
      width: '100%',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <ContentWrapper>
        <SlideContainer ref={slideContainerRef} isVisible={!showVideo}>
          <SlideImage 
            src={require(`../../assets/images/${currentSlide}.png`)}
            alt={`Tutorial Slide ${currentSlide}`}
          />
          
          <NavigationOverlay>
            <ArrowButton 
              onClick={handlePrevSlide}
              disabled={currentSlide === 1}
            >
              &#60;
            </ArrowButton>
            
            <ArrowButton 
              onClick={handleNextSlide}
              disabled={currentSlide === totalSlides}
            >
              &#62;
            </ArrowButton>
          </NavigationOverlay>

          <FullscreenButton onClick={toggleFullscreen}>
            <FullscreenIcon>
              {isFullscreen ? '⤌' : '⤢'}
            </FullscreenIcon>
          </FullscreenButton>

          <DotsContainer>
            {[...Array(totalSlides)].map((_, index) => (
              <Dot 
                key={index + 1}
                active={currentSlide === index + 1}
                onClick={() => handleDotClick(index + 1)}
              />
            ))}
          </DotsContainer>
        </SlideContainer>

        <VideoContainer isVisible={showVideo}>
          <StyledVideo 
            ref={videoRef}
            controls
            width="100%"
            controlsList="nodownload"
          >
            <source src={TallyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoContainer>

        <ButtonContainer>
          <Button 
            variant="primary"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? 'Show Tutorial Slides' : 'Show Tutorial Video'}
          </Button>
        </ButtonContainer>
      </ContentWrapper>
    </Card>
  );
};

export default TutorialVideo; 