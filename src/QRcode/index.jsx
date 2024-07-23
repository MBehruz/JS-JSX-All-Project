import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { QrReader } from 'react-qr-reader';

const QR = () => {
  const [value, setValue] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const qrRef = useRef();

  const handleDownload = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          // Download QR code image
          download(dataUrl, 'qr-code.png');

          // Scan QR code image
          scanQRCode(dataUrl);
        })
        .catch((err) => {
          console.error('Failed to download QR code', err);
          alert('Error downloading QR code');
        });
    }
  };

  const scanQRCode = (imageUrl) => {
    // Create a new image element to scan the QR code
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      // Use react-qr-reader to scan the QR code
      QrReader.scanQRCode(canvas)
        .then((result) => {
          setScanResult(result);
          if (result && result.toLowerCase().includes('bexruz')) {
            alert("Siz muvaffaqiyatli ro'yhatdan o'tdingiz!");
          } else {
            alert('Xato: QR kodda "bexruz" so\'zi yo\'q.');
          }
        })
        .catch((err) => {
          console.error('Failed to scan QR code', err);
          alert('Error scanning QR code');
        });
    };
    img.src = imageUrl;
  };

  const handleError = (err) => {
    console.error(err);
    alert("QR kodni o'qishda xato yuz berdi.");
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
          Download & Scan QR Code
        </button>
      )}
      <br />

      <QrReader delay={300} onError={handleError} style={{ width: '100%' }} />
      {scanResult && <p>QR kod natijasi: {scanResult}</p>}
    </div>
  );
};

export default QR;
