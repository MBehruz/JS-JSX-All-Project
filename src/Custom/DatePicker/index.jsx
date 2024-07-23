import React from 'react';
import { DatePicker } from 'antd';
import { Wrapper } from './style';
import moment from 'moment';

export default ({ onChange, label, status, value, ...rest }) => {
  const handleDateChange = (dateString) => {
    onChange(dateString);
  };

  return (
    <Wrapper {...rest}>
      <div></div>
      <DatePicker
        value={value}
        onChange={handleDateChange}
        format='YYYY-MM-DD'
        placeholder=''
        status={status}
      />
    </Wrapper>
  );
};
