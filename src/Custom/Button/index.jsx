import React from 'react';
import { Button } from 'antd';
import { Wrapper } from './style';
export default ({ type, onClick, title, formiktype, ...rest }) => (
  <Wrapper {...rest}>
    <Button
      {...rest}
      type={type}
      onClick={onClick}
      formiktype={formiktype}
      className='button'
    >
      {title}
    </Button>
  </Wrapper>
);
