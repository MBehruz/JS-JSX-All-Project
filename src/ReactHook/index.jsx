import React, { useCallback, useMemo, useState } from 'react';
import Navbar from './Navbar';

export const ReactHook = () => {
  const [count, setCount] = useState(0);
  console.log('parent component render');

  {
    /* useMemo dan foydalanish xuddi useEffect ga oxhsaydi useMemo value qaytaradi */
  }
  const obj1 = useMemo(() => {
    return { title: 'Hey obj1' };
  }, []);

  ///////////////////// useMemo value ga return qiladi
  ///////////////////// useCallback function ga return qiladi

  {
    /* useCallback dan foydalanish xuddi useEffect ga oxhsaydi useMemo function qaytaradi */
  }
  const obj2 = useCallback((title) => {
    return { title: 'Hey' + title };
  }, []);

  return (
    <div>
      {/*1-xolat: child component ni render bolishdan saqlayabdi boshida 1 marta render bolyabdi kegin render bomaydi */}
      {/* <Navbar /> */}

      {/* 2-xolat */}
      {/* <Navbar title={'Test'} /> */}

      {/*3-xolat: parent va child render bolyabdi har doim buni toxtatish uchun useMemo dan foydalanamiz */}
      {/* <Navbar data={{ title: 'props navbar' }} /> */}
      <Navbar obj1={obj1} obj2={obj2} />

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}> ok + </button>
      <button onClick={() => setCount(count - 1)}> ok -</button>
    </div>
  );
};

{
  /* memo  render lanishdan saqlaydi CHILD componentni    */
}
export default React.memo(ReactHook);
