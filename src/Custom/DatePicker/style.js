import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: auto;
  width: ${({ width }) => width || '100%'};
  padding: 0 10px;

  .ant-picker-status-error.ant-picker {
    border-color: #ff4d4f; ///err uchun
  }
  .ant-picker {
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '35px'};
    border-color: ${({ borderColor }) => borderColor || '#dfe1e7'};
    border-radius: 8px;
  }
  .ant-picker:hover,
  .ant-picker-focused {
    box-shadow: 0 0 2px teal;
    border-color: teal;
  }
  .ant-picker-focused {
    box-shadow: none;
    outline: 0;
  }
`;
