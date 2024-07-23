import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import DatePicker from './DatePicker';

const CustomFotms = () => {
  const handleBtn = () => {
    console.log('salom');
  };
  const changeInput = (e) => {
    console.log(e.target.value);
  };

  // date;
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (date, dateString) => {
    setSelectedDate(date);
    // console.log(date, dateString);
  };

  return (
    <div>
      <Button
        type='primary'
        title='Button'
        onClick={handleBtn}
        formiktype=''
        height=''
        width=''
        color=''
        bgcolor=''
      />
      <br />
      <Input
        placeholder={''}
        onChange={(e) => changeInput(e)}
        height=''
        // size=''
        // type=''  //// default type='text
        // type='textarea'
        // type='url'
        // type='search'
      />
      <br />
      <DatePicker onChange={handleChange} />
    </div>
  );
};

export default CustomFotms;
