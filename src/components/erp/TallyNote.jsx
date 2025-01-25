import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
`;

const NoteText = styled.p`
  color: #666;
  margin: 0;
  font-size: 14px;
`;

const Highlight = styled.span`
  font-weight: 600;
`;

const TallyNote = () => {
  return (
    <NoteContainer>
      <NoteText>
        <Highlight>NOTE:</Highlight> First time using the product? Please download the file and extract it to the root directory of your C drive (C:\)
      </NoteText>
    </NoteContainer>
  );
};

export default TallyNote; 