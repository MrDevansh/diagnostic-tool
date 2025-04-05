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
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Performance</h2>
      <p>FPS: <strong>{fps}</strong></p>
    </div>
  );
};

export default PerformancePanel;