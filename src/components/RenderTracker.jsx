import React, { useRef, useEffect } from 'react';

const RenderTracker = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Render Tracker</h2>
      <p>This component has rendered: <strong>{renderCount.current}</strong> times</p>
    </div>
  );
};

export default RenderTracker;