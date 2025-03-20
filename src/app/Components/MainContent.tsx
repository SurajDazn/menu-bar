"use client";
import React from 'react';

interface MainContentProps {
  toggleRightInfo: () => void;
  isRightInfoOpen: boolean;
}

export default function MainContent({ toggleRightInfo, isRightInfoOpen }: MainContentProps) {
  return (
    <main className="flex-1 md:w-[70%] h-full overflow-y-auto p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-gray-600 mb-4">
          This is a responsive 3-column layout built with React, Next.js, and Tailwind CSS.
          The layout adapts to different screen sizes, with special considerations for mobile devices.
        </p>
        <p className="text-gray-600 mb-6">
          On desktop, the left navigation and main content are visible by default, with the right info panel hidden until toggled.
          On mobile, the left navigation is an overlay, and the right info panel expands dynamically when toggled.
        </p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={toggleRightInfo}
        >
          {isRightInfoOpen ? 'Hide Info' : 'View Info'}
        </button>
        <div className="mt-10 space-y-6">
          <h2 className="text-xl font-semibold">Additional Content</h2>
          <p className="text-gray-600">
            This additional content demonstrates how the layout handles overflow with scrolling.
            Each column has its own scrollable area, maintaining the full height of the viewport.
          </p>
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className="p-4 bg-white rounded-md shadow">
              <h3 className="font-medium mb-2">Content Section {i + 1}</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla magna at nulla ultricies,
                eu luctus eros dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
