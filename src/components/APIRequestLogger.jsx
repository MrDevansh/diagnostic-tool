import React, { useEffect, useState } from 'react';

const APIRequestLogger = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Save original fetch
    const originalFetch = window.fetch;

    // Override fetch
    window.fetch = async (...args) => {
      const [resource, config = {}] = args;
      const method = config.method || 'GET';
      const start = performance.now();

      try {
        const response = await originalFetch(...args);
        const duration = (performance.now() - start).toFixed(2);

        setLogs(prev => [
          {
            id: Math.random().toString(36).substr(2, 9),
            url: typeof resource === 'string' ? resource : resource.url,
            method,
            status: response.status,
            duration,
          },
          ...prev,
        ]);

        return response;
      } catch (error) {
        const duration = (performance.now() - start).toFixed(2);

        setLogs(prev => [
          {
            id: Math.random().toString(36).substr(2, 9),
            url: typeof resource === 'string' ? resource : resource.url,
            method,
            status: 'NETWORK ERROR',
            duration,
          },
          ...prev,
        ]);

        throw error;
      }
    };

    // Cleanup on unmount: restore original fetch
    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  // Simple test call triggered by button click
  const testApiCall = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        console.log('Random User:', data.results[0].name.first);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-xl shadow-md mb-6 font-mono max-w-full">
      <h2 className="text-xl font-bold mb-4 text-blue-900 flex justify-between items-center">
        API Request Logger
        <button
          onClick={testApiCall}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Test API Call
        </button>
      </h2>

      <div className="max-h-60 overflow-y-auto border border-blue-400 rounded-md p-2 bg-white">
        {logs.length === 0 ? (
          <p className="text-blue-700 italic">No API requests logged yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr>
                <th className="px-2 py-1 border-b border-blue-400">Method</th>
                <th className="px-2 py-1 border-b border-blue-400">URL</th>
                <th className="px-2 py-1 border-b border-blue-400">Status</th>
                <th className="px-2 py-1 border-b border-blue-400">Time (ms)</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(({ id, url, method, status, duration }) => (
                <tr key={id} className="hover:bg-blue-100">
                  <td className="px-2 py-1 font-semibold">{method}</td>
                  <td className="px-2 py-1 truncate max-w-xs" title={url}>{url}</td>
                  <td
                    className={`px-2 py-1 font-semibold ${
                      status >= 200 && status < 300
                        ? 'text-green-600'
                        : status === 'NETWORK ERROR'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {status}
                  </td>
                  <td className="px-2 py-1">{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default APIRequestLogger;
