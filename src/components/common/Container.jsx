import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  & > * {
    margin-bottom: 30px;
  }
  
  & > *:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`; 