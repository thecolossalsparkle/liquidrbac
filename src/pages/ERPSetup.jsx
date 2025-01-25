import React from 'react';
import WelcomeCard from '../components/erp/WelcomeCard';
import TutorialVideo from '../components/erp/TutorialVideo';
import TallyNote from '../components/erp/TallyNote';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const ERPSetup = () => {
  return (
    <StyledContainer>
      <WelcomeCard />
      <TutorialVideo />
      <TallyNote />
    </StyledContainer>
  );
};

export default ERPSetup; 