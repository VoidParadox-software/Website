
'use client';

import { useState, useEffect } from 'react';

/**
 * @file This file defines the Starfield component, which creates a looping, animated starfield background effect.
 */

/**
 * The Starfield component generates a multi-layered, animated starfield using CSS box-shadows.
 * It creates three layers of stars with different sizes and animation speeds to produce a parallax effect.
 * The star positions are generated randomly on the client side to avoid server-client mismatch.
 *
 * @returns {JSX.Element} A div container with the starfield effect.
 */
const Starfield = () => {
    const [styles, setStyles] = useState('');

    useEffect(() => {
        /**
         * Generates a comma-separated string of box-shadow values to represent stars.
         * @param {number} length - The number of stars to generate.
         * @returns {string} A string of CSS box-shadow values.
         */
        const generateStars = (length: number) => 
            Array.from({ length }).map(() => `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`).join(',');

        // Set the CSS styles dynamically. This ensures the random star positions are generated on the client.
        setStyles(`
          @keyframes move-stars {
            from { transform: translateY(0px); }
            to { transform: translateY(-2000px); }
          }
          .stars {
            width: 1px; height: 1px; background: transparent;
            box-shadow: ${generateStars(700)};
            animation: move-stars 200s linear infinite;
          }
          .stars-2 {
            width: 2px; height: 2px; background: transparent;
            box-shadow: ${generateStars(200)};
            animation: move-stars 150s linear infinite;
          }
          .stars-3 {
            width: 3px; height: 3px; background: transparent;
            box-shadow: ${generateStars(100)};
            animation: move-stars 100s linear infinite;
          }
        `);
    }, []);

    return (
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <style>{styles}</style>
        <div className="stars absolute"></div>
        <div className="stars-2 absolute"></div>
        <div className="stars-3 absolute"></div>
      </div>
    );
  };
  
  export default Starfield;
