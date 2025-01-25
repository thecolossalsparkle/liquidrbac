import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import styled from 'styled-components';

const CardContent = styled.div`
  padding: 5px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const WelcomeText = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const HighlightedText = styled.span`
  color: #007bff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 0;
`;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const WelcomeCard = () => {
  return (
    <StyledCard>
      <CardContent>
        <WelcomeText>
          Welcome Aboard! Your Journey to{' '}
          <HighlightedText>Hassle-Free Invoice Processing</HighlightedText> Starts Now.
        </WelcomeText>
        <ButtonContainer>
          <Button 
            variant="primary"
            onClick={() => window.open('/download/tally-requisites', '_blank')}
          >
            Download Tally Requisites
          </Button>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
};

export default WelcomeCard; 