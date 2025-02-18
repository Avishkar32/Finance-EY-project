import React from 'react';
import QrReader from 'react-qr-scanner';

const QRCodeScanner = () => {
    const handleScan = (data) => {
        if (data) {
            console.log('Scanned Data:', data.text);
            alert(`Scanned Data: ${data.text}`);
        }
    };

    const handleError = (err) => {
        console.error(err);
        alert('Error scanning QR code');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>QR Code Scanner</h1>
            <div style={{ width: '300px', margin: 'auto' }}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
};

export default QRCodeScanner;
