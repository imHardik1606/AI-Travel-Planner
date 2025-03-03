import React from 'react';

function Footer() {
  return (
    <footer className="mt-7 bg-slate-200 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center h-20">
        <h2 className="text-gray-600 text-sm sm:text-base">
          Created by <span className="font-semibold">Hardik Gayner</span> | AI Travel Planner
        </h2>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
