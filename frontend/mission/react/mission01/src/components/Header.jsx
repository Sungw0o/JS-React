import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f9be7c;
  padding: 20px;
  text-align: center;
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h1`
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>예산 계산기</Title>
    </HeaderContainer>
  );
}

export default Header;
