import React, { useReducer } from 'react';

const Redus = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'dec':
        return state - 1;
      case 'inc':
        return state + 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <button onClick={() => dispatch({ type: 'inc' })}>ok + </button>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: 'dec' })}>ok -</button>
    </div>
  );
};

export default Redus;
