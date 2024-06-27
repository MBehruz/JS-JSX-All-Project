import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const QR = () => {
  const [value, setValue] = useState('');
  const qrRef = useRef();

  const handleDownload = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          download(dataUrl, 'qr-code.png');
        })
        .catch((err) => {
          console.error('Failed to download QR code', err);
        });
    }
  };

  return (
    <div className='App' style={{ backgroundColor: 'teal', padding: '1rem' }}>
      <input
        type='text'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Text yozing...'
        style={{
          marginBottom: '1rem',
          border: 'none',
          outline: 'none',
          padding: '0.5rem',
          width: '260px',
          boxSizing: 'border-box',
        }}
      />
      <br />

      {value && (
        <div ref={qrRef}>
          <QRCode title='GeeksForGeeks' value={value} />
        </div>
      )}
      <br />

      {value && (
        <button
          style={{
            border: '2px solid teal',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
          }}
          onClick={handleDownload}
        >
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default QR;
