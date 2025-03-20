"use client";
import React from 'react';

interface RightInfoProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function RightInfo({ isOpen, onClose }: RightInfoProps) {
  return (
    <div className={`
      fixed md:relative top-0 right-0 z-30 h-full bg-gray-50 
      w-full md:w-[15%] overflow-y-auto
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${isOpen ? 'md:translate-x-0' : 'md:translate-x-full'}
    `}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Right Info Panel</h2>
          <button 
            className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-medium mb-2">Content Section 1</h3>
            <p className="text-sm text-gray-600">
              This is information that appears in the right panel.
              It dynamically expands when toggled on mobile.
            </p>
          </div>
          {/* Additional content sections... */}
        </div>
      </div>
    </div>
  );
}