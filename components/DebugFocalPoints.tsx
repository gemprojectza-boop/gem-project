import React, { useEffect, useState } from 'react';
import { getFocalPoint } from '../utils/focalPointStorage.ts';

const DebugFocalPoints: React.FC = () => {
  const [focalPoints, setFocalPoints] = useState<Record<string, any>>({});
  const [rawStorage, setRawStorage] = useState<string>('');
  const [isVisible, setIsVisible] = useState(() => sessionStorage.getItem('debugFocalPointsVisible') !== 'false');

  useEffect(() => {
    if (!isVisible) return;

    const stored = localStorage.getItem('gem-project-focal-points');
    setRawStorage(stored || 'No focal points in localStorage');
    
    if (stored) {
      setFocalPoints(JSON.parse(stored));
    }

    const dogKeys = [
      'alex_main', 'chandra_main', 'daisy_main', 'max_main', 
      'ruth_main', 'fifi_main', 'foxy_main', 'hazel_main',
      'casper_main', 'jerry_main', 'jesse_main', 'simba_main', 
      'ruby_main', 'pretty_main'
    ];

    const testResults: Record<string, any> = {};
    dogKeys.forEach(key => {
      testResults[key] = getFocalPoint(key);
    });
    
    console.log('🐕 Dog Focal Points Debug:', testResults);
    setFocalPoints(testResults);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('debugFocalPointsVisible', 'false');
  };

  if (!isVisible || (process.env.NODE_ENV !== 'development')) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '10px',
      background: 'white',
      color: 'black',
      padding: '20px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: 'bold',
      maxWidth: '350px',
      maxHeight: '500px',
      overflow: 'auto',
      zIndex: 1000,
      border: '3px solid #00AEEF',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <button 
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#E30613',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          fontWeight: 'bold',
          lineHeight: '24px',
          textAlign: 'center',
          padding: '0'
        }}
        aria-label="Close debugger"
      >
        &times;
      </button>
      <h4>🐕 Focal Points Debug</h4>
      <div style={{ marginBottom: '15px' }}>
        <strong style={{ color: '#00AEEF', fontSize: '16px' }}>Raw Storage:</strong>
        <div style={{ 
          fontSize: '12px', 
          background: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '5px',
          marginTop: '5px',
          fontFamily: 'monospace',
          color: '#333',
          fontWeight: 'normal',
          wordBreak: 'break-all'
        }}>
          {rawStorage}
        </div>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong style={{ color: '#00AEEF', fontSize: '16px' }}>Dog Focal Points:</strong>
        {Object.entries(focalPoints).map(([key, value]) => (
          <div key={key} style={{ 
            margin: '8px 0', 
            padding: '5px',
            background: '#f8f9fa',
            borderRadius: '3px',
            fontSize: '13px'
          }}>
            <strong style={{ color: '#E30613' }}>{key.replace('_main', '')}:</strong> 
            <span style={{ marginLeft: '10px', color: '#333' }}>
              {value ? `x=${value.x?.toFixed(2)}, y=${value.y?.toFixed(2)}` : 'Not Set'}
            </span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => window.location.reload()} 
        style={{
          background: '#00AEEF',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          marginTop: '10px',
          cursor: 'pointer'
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default DebugFocalPoints;
