import React from 'react';

const DownloadLogs = () => {
  const handleDownload = () => {
    const logs = {
      timestamp: new Date(),
      message: "Sample logs (replace with real logs if needed)",
    };
    const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logs.json';
    a.click();
  };

  return (
    <div className="text-right">
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Download Logs
      </button>
    </div>
  );
};

export default DownloadLogs;