import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 14px;
`;

export default ({ title }) => {
  return (
    <Wrapper>
      <label>{title}</label>
    </Wrapper>
  );
};
