import React, { memo } from 'react';

const Navbar = (props) => {
  console.log('child  component render');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        fontSize: '10px',
      }}
    >
      {/* 3-xolat useCallback va useMemo  dan foydalanilgan shu sabab parent va child 1 marta render bolyabdi count ozgargan taqdirda esa parent ni ozigina render bolyabdi*/}
      <h1>{props.obj1.title}</h1>
      <h1>{props.obj2('useCallback').title}</h1>

      {/*2-xolat props: data qilib malumot oladi {props.data.title} orqali malumot olish bu xolatda parent ham child ham render boladi  */}
      {/* <h1>{props.data.title}</h1> */}

      {/*1-xolat props orqali malumot olish */}
      {/* <h1>{title}</h1> */}

      {/* 0-xolat shunchaki <h1></h1> tegda chiqarish */}
      {/* <h1>home</h1> */}
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>Test</h1>
      <h1>Navbar</h1>
    </div>
  );
};
{
  /* memo  render lanishdan saqlaydi CHILD componentni    */
}
export default memo(Navbar);
