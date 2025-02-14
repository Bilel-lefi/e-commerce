import React from 'react';

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-emerald-900">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-4 text-xl md:text-2xl font-semibold text-white">
          RJ DECO
        </p>
      </div>
    </div>
  );
}

export default Loading;
