import React, { useEffect, useState } from 'react';

const ErrorCatcher = () => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const handleError = (e) => {
      setErrors((prev) => {
        if (prev.includes(e.message)) return prev;
        return [...prev, e.message];
      });
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold mb-2">JavaScript Errors</h2>
        {errors.length > 0 && (
          <button
            onClick={() => setErrors([])}
            className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Clear
          </button>
        )}
      </div>
  
      {errors.length === 0 ? (
        <p className="text-sm text-gray-500">No errors captured yet.</p>
      ) : (
        <ul className="list-disc ml-5">
          {errors.map((err, i) => (
            <li key={i} className="text-sm text-red-600">
              {err}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ErrorCatcher;