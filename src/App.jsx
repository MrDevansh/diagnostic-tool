import React from 'react';
import PerformancePanel from './components/PerformancePanel';
import RenderTracker from './components/RenderTracker';
import ConsoleViewer from './components/ConsoleViewer';
import ErrorCatcher from './components/ErrorCatcher';
import DownloadLogs from './components/DownloadLogs';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dev Diagnostics</h1>
      <PerformancePanel />
      <RenderTracker />
      <ConsoleViewer />
      <ErrorCatcher />
      <DownloadLogs />
    </div>
  );
};

export default App;