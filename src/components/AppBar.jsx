import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.3);
  padding: 1.2rem 2rem;
  marginTop: 15rem;
  position: fixed;
  width: 100%;
  z-index: 20;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 -1px 0 0 rgba(0, 0, 0, 0.08);
`;

const AppBar = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default AppBar; 