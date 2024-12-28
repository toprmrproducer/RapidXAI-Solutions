import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg opacity-20 group-hover:opacity-100 blur transition duration-300"></div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
          {/* 4-point star */}
          <path
            d="M16 2L20 14L30 16L20 18L16 30L12 18L2 16L12 14L16 2Z"
            className="fill-[url(#gradient-1)]"
          />
          <defs>
            <linearGradient id="gradient-1" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00e5ff" />
              <stop offset="1" stopColor="#00b4d8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="font-display text-lg font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-transparent bg-clip-text tracking-tight">
        RapidX.AI
      </span>
    </div>
  );
}