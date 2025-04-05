import React, { useEffect, useState } from 'react';

const ConsoleViewer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs(prev => [...prev, { type: 'log', message: args.join(' ') }]);
      originalLog(...args);
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Console Logs</h2>
      <div className="max-h-48 overflow-y-auto">
        {logs.map((log, index) => (
          <p key={index} className="text-sm text-gray-800">{log.message}</p>
        ))}
      </div>
    </div>
  );
};

export default ConsoleViewer;