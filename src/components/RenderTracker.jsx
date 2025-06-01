import React, { useRef } from 'react';

const RenderTracker = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div
      className="rounded-2xl p-6 mb-4 shadow-lg text-gray-900"
      style={{
        background: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
        boxShadow: "0 8px 20px rgba(248, 181, 0, 0.4)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-3">Render Tracker</h2>
      <p>
        This component has rendered: <strong>{renderCount.current}</strong> times
      </p>
    </div>
  );
};

export default RenderTracker;
