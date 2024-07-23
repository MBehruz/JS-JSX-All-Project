import React, { useReducer } from 'react';
import { DEC, INC } from './types';
import { reducer } from './reducers';

const Redus = () => {
  const [count, dispatch] = useReducer(reducer);
  // count == 0 ? 'disable' : count;
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button onClick={() => dispatch({ type: INC })}>ok + </button>
      <h3 style={{ padding: '30px 10px 0  10px', fontSize: '30px' }}>
        {count}
      </h3>
      <button onClick={() => dispatch({ type: DEC })}> - ok </button>
    </div>
  );
};

export default Redus;
