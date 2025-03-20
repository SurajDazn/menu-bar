"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftNavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

export default function LeftNav({ isOpen, toggleNav }: LeftNavProps) {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Navigation sidebar - 15% width on desktop, overlay on mobile */}
      <div className={`
        fixed md:relative top-0 left-0 z-40 h-full w-64 md:w-[15%] bg-white shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        overflow-y-auto
      `}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Navigation</h2>
            <button 
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
              onClick={toggleNav}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`block p-2 rounded-md hover:bg-gray-100 transition-colors ${
                      pathname === item.path ? 'bg-blue-100 text-blue-600' : ''
                    }`}
                    onClick={() => window.innerWidth < 768 && toggleNav()}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
