import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QR = () => {
  const [value, setValue] = useState();
  return (
    <div className='App'>
      <input
        type='text'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Text yozing...'
        style={{ marginBottom: '1rem' }}
      />
      <br />

      {value && <QRCode title='GeeksForGeeks' value={value} />}
    </div>
  );
};

export default QR;
