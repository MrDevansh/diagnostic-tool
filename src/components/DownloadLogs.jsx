import React from "react";

const DownloadLogs = () => {
  const handleDownload = () => {
    const logs = {
      timestamp: new Date().toISOString(),
      message: "Sample logs (replace with real logs if needed)",
    };
    const blob = new Blob([JSON.stringify(logs, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "logs.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="text-right">
      <button
        onClick={handleDownload}
        className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded hover:brightness-110 transition"
      >
        Download Logs
      </button>
    </div>
  );
};

export default DownloadLogs;
