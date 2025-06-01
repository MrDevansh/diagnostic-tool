import React, { useEffect, useState } from 'react';

const ConsoleViewer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs(prev => [...prev, { type: 'log', message: args.join(' ') }]);
      originalLog(...args);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  return (
    <div
      className="p-5 rounded-lg shadow-lg mb-6 font-mono max-w-full"
      style={{
        background: 'linear-gradient(135deg, #d6e6ff 0%, #ffd6d6 100%)',
        boxShadow: '0 8px 25px rgba(255, 214, 214, 0.4)',
        color: '#1e293b', // dark slate text color
      }}
    >
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#334155' }}>
        Console Logs
      </h2>
      <div
        className="max-h-60 overflow-y-auto border rounded-md p-4"
        style={{
          background: '#fefefe',
          borderColor: '#cbd5e1',
          color: '#334155',
          fontVariantNumeric: 'tabular-nums',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {logs.length === 0 ? (
          <p className="italic" style={{ color: '#64748b' }}>
            No logs captured yet.
          </p>
        ) : (
          logs.map((log, index) => (
            <p key={index} className="text-sm mb-1">
              {log.message}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default ConsoleViewer;
