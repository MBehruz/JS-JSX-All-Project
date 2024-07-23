import React from 'react';

import { CiSearch } from 'react-icons/ci';
import Label from '../Label';
import { InputWrapper } from './style';
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const CustomInput = ({
  type = 'text',
  onChange,
  placeholder,
  label,
  value,
  name,
  id,
  ...rest
}) => {
  switch (type) {
    case 'search':
      return (
        <InputWrapper {...rest}>
          {label && <Label title={label} />}
          <Input
            prefix={<CiSearch color='#8490A5' fontWeight='400' />}
            className='input'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            {...rest}
          />
        </InputWrapper>
      );

    case 'textarea':
      return (
        <InputWrapper {...rest}>
          {label && <Label title={label} />}
          <TextArea
            placeholder={placeholder}
            className='input'
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            {...rest}
          />
        </InputWrapper>
      );

    case 'url':
      return (
        <InputWrapper {...rest}>
          {label && <Label title={label} />}
          <Input
            addonBefore='http://'
            className='input'
            defaultValue='mysite'
            type='url'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            {...rest}
          />
        </InputWrapper>
      );

    case 'text':
    default:
      return (
        <InputWrapper {...rest}>
          {label && <Label title={label} />}
          <Input
            type='text'
            className='input'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            {...rest}
          />
        </InputWrapper>
      );
  }
};

export default CustomInput;
