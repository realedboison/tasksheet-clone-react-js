import React from 'react';
import { useState } from 'react';

const Homeicon = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <React.Fragment>
      {isOpen ? (
        <div onChange={() => setisOpen(false)}>
          {/* svg here */}
          <svg
            // style="enable-background:new 0 0 21 21;"
            version="1.1"
            viewBox="0 0 23 23"
            fill="none"
            width="21"
            height="21"
            xmlns="http://www.w3.org/2000/svg"
            // className="fill-current"
          >
            <g id="black" />
            <path
              d="M23.6,10.3L13.2,2.4c-0.7-0.5-1.7-0.5-2.5,0L0.4,10.3C-0.4,10.9,0,12,1,12h1v6.1C2,20.2,3.8,22,6,22h2   c0.6,0,1-0.4,1-1v-4.9C9,15,9.9,14,11,14h2c1.1,0,2,1,2,2.1V21c0,0.5,0.4,1,1,1h2c2.2,0,4-1.8,4-3.9V12h1   C23.9,12,24.3,10.9,23.6,10.3z"
              fill="#121212"
            />
          </svg>
        </div>
      ) : (
        <div onClick={() => setisOpen(true)}>
          {/* svg outcome here */}
          <svg
            // style="enable-background:new 0 0 21 21;"
            version="1.1"
            viewBox="0 0 23 23"
            fill="none"
            width="21"
            height="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="purple" />
            <path
              d="M23.6,10.3L13.2,2.4c-0.7-0.5-1.7-0.5-2.5,0L0.4,10.3C-0.4,10.9,0,12,1,12h1v6.1C2,20.2,3.8,22,6,22h2   c0.6,0,1-0.4,1-1v-4.9C9,15,9.9,14,11,14h2c1.1,0,2,1,2,2.1V21c0,0.5,0.4,1,1,1h2c2.2,0,4-1.8,4-3.9V12h1   C23.9,12,24.3,10.9,23.6,10.3z"
              fill="#707aff"
            />
          </svg>
        </div>
      )}
    </React.Fragment>
  );
};

export default Homeicon;