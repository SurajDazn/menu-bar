// app/page.tsx
"use client";
import { useState } from 'react';
import RightInfo from './Components/RightInfo';
import MainContent from './Components/MainContent';
import LeftNav from './Components/LeftNav';


export default function Home() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState<boolean>(false);
  const [isRightInfoOpen, setIsRightInfoOpen] = useState<boolean>(false);

  const toggleLeftNav = (): void => {
    setIsLeftNavOpen(!isLeftNavOpen);
  };

  const toggleRightInfo = (): void => {
    setIsRightInfoOpen(!isRightInfoOpen);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {!isLeftNavOpen && (
        <button 
          className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded-lg bg-blue-500 text-white"
          onClick={toggleLeftNav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      <LeftNav isOpen={isLeftNavOpen} toggleNav={toggleLeftNav} />
      <MainContent toggleRightInfo={toggleRightInfo} isRightInfoOpen={isRightInfoOpen} />
      <RightInfo isOpen={isRightInfoOpen} onClose={toggleRightInfo} />
    </div>
  );
}