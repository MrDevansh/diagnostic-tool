import React from "react";
import PerformancePanel from "./components/PerformancePanel";
import RenderTracker from "./components/RenderTracker";
import ConsoleViewer from "./components/ConsoleViewer";
import DownloadLogs from "./components/DownloadLogs";
import APIRequestLogger from "./components/APIRequestLogger";
import SimpleLogger from "./components/SimpleLogger";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
  <h1 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 drop-shadow-md hover:drop-shadow-xl transition-all duration-300">
  Dev Diagnostics
</h1>


      <div className="max-w-4xl mx-auto space-y-8">
        <PerformancePanel />
        <RenderTracker />
        <ConsoleViewer />
        <APIRequestLogger />
        <DownloadLogs />
      </div>
    </div>
  );
}

export default App;
