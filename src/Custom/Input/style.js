import styled from 'styled-components';

export const InputWrapper = styled.div`
  min-width: 120px;
  max-width: 100%;
  padding: 0 10px;
  .input {
    min-height: 3px;
    height: ${({ height }) => height || '35px'};
    font-size: ${({ size }) => size || '15px'};
    border-radius: ${({ raduis }) => raduis || ''};
  }
  :where(.css-dev-only-do-not-override-j9bb5n).ant-input-outlined:hover {
    border-color: ${({ border }) => border || 'teal'};
  }
  :where(.css-dev-only-do-not-override-j9bb5n).ant-input-outlined:focus {
    border-color: ${({ border }) => border || 'teal'};
  }
  :where(.css-dev-only-do-not-override-j9bb5n).ant-input-outlined:focus,
  :where(.css-dev-only-do-not-override-j9bb5n).ant-input-outlined:focus-within {
    /* border-color: #f0f; */
    box-shadow: 0 0 0 2px #fff;
    outline: 0;
    background-color: #ffffff;
  }
`;
