import React, { useEffect, useState } from 'react';

const PerformancePanel = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let last = performance.now();
    let frames = 0;

    const loop = () => {
      const now = performance.now();
      frames++;
      if (now > last + 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return (
    <div
      className="rounded-2xl p-6 mb-4 shadow-lg text-gray-900"
      style={{
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        boxShadow: "0 8px 20px rgba(254, 214, 227, 0.5)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-3">Performance</h2>
      <p className="text-lg">FPS: <strong>{fps}</strong></p>
    </div>
  );
};

export default PerformancePanel;
