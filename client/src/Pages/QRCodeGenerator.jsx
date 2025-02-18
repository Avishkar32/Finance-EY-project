import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <div style={{ marginTop: '20px' }}>
                {text && (
                    <QRCode
                        value={text}
                        size={256}
                        style={{ margin: 'auto' }}
                    />
                )}
            </div>
        </div>
    );
};

export default QRCodeGenerator;
