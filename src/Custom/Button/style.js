import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: auto;
  padding: 0 10px;
  margin: 0;
  .button {
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || ''};
    color: ${({ color }) => color || ''};
    background-color: ${({ bgcolor }) => bgcolor || ''};
    min-height: 30px;
    text-align: center;
    border-radius: ${({ raduis }) => raduis || ''};
  }
  :where(.css-dev-only-do-not-override-j9bb5n).ant-btn-dashed:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: ${({ color }) => color || 'teal'};
    border-color: ${({ border }) => border || 'teal'};
  }

  :where(.css-dev-only-do-not-override-j9bb5n).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):active {
    background-color: teal;
  }

  /* Primary */
  :where(.css-dev-only-do-not-override-j9bb5n).ant-btn-primary {
    background-color: #e9ab65;
  }
  :where(.css-dev-only-do-not-override-j9bb5n).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    background-color: teal;
  }
`;
