import React from 'react';

function Dropdown() {
  return (
    <div>
      <button className="relative">
        <div className="flex items-center gap-2 ">
          {/* dropdown button */}
          <div className="h-12 w-12 rounded-full bg-primaryPurple ring-primaryPurple focus:ring"></div>
        </div>

        <div className="absolute right-0 top-full mt-1 w-max min-w-full rounded bg-yellow-200 shadow-md">
          <ul className="rounded border text-center">
            <li className="border-b px-4 py-4">Akrobeto</li>
            <li className="border-b px-4 py-4">menu list two</li>
            <li className="border-b px-4 py-4">menu list three</li>
          </ul>
        </div>
      </button>
    </div>
  );
}

export default Dropdown;
