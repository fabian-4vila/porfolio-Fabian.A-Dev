
import React, { useEffect, useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('colorChanged') === 'false'
  );

  useEffect(() => {
    const applyDarkModeColors = () => {
      document.documentElement.style.setProperty('--color-BG-A', 'linear-gradient(216deg,rgba(77,77,77,0.05) 0%,rgba(77,77,77,0.05) 25%,rgba(42,42,42,0.05) 25%,rgba(42,42,42,0.05) 38%,rgba(223,223,223,0.05) 38%,rgba(223,223,223,0.05) 75%,rgba(36,36,36,0.05) 75%,rgba(36,36,36,0.05) 100%),linear-gradient(44deg,rgba(128,128,128,0.05) 0%,rgba(128,128,128,0.05) 34%,rgba(212,212,212,0.05) 34%,rgba(212,212,212,0.05) 57%,rgba(25,25,25,0.05) 57%,rgba(25,25,25,0.05) 89%,rgba(135,135,135,0.05) 89%,rgba(135,135,135,0.05) 100%),linear-gradient(241deg,rgba(55,55,55,0.05) 0%,rgba(55,55,55,0.05) 14%,rgba(209,209,209,0.05) 14%,rgba(209,209,209,0.05) 60%,rgba(245,245,245,0.05) 60%,rgba(245,245,245,0.05) 69%,rgba(164,164,164,0.05) 69%,rgba(164,164,164,0.05) 100%),linear-gradient(249deg,rgba(248,248,248,0.05) 0%,rgba(248,248,248,0.05) 32%,rgba(148,148,148,0.05) 32%,rgba(148,148,148,0.05) 35%,rgba(202,202,202,0.05) 35%,rgba(202,202,202,0.05) 51%,rgba(181,181,181,0.05) 51%,rgba(181,181,181,0.05) 100%),linear-gradient(92deg,hsl(214,0%,11%),hsl(214,0%,11%))');
      document.documentElement.style.setProperty('--color-Name', 'linear-gradient(270deg, hsla(220, 48%, 54%, 1) 0%, hsla(281, 54%, 51%, 1) 100%)');
      document.documentElement.style.setProperty('--color-T1', '#9CFFFAb3');
      document.documentElement.style.setProperty('--color-T3', '#0099ffb3');
      document.documentElement.style.setProperty('--color-T2', '#ffffff80');
      document.documentElement.style.setProperty('--color-BG', '#34323b');
      document.documentElement.style.setProperty('--color-BG2', '#2b2b2b');
      document.documentElement.style.setProperty('--color-BG3', '#404040');
      document.documentElement.style.setProperty('--color-P', '#BFBFBF');
      document.documentElement.style.setProperty('--color-shadow', '#000000b3');
    };

    const applyOriginalColors = () => {
        document.documentElement.style.setProperty('--color-BG-A', 'linear-gradient(216deg,rgba(178,178,178,0.05) 0%,rgba(178,178,178,0.05) 25%,rgba(213,213,213,0.05) 25%,rgba(213,213,213,0.05) 38%,rgba(32,32,32,0.05) 38%,rgba(32,32,32,0.05) 75%,rgba(219,219,219,0.05) 75%,rgba(219,219,219,0.05) 100%),linear-gradient(44deg,rgba(127,127,127,0.05) 0%,rgba(127,127,127,0.05) 34%,rgba(43,43,43,0.05) 34%,rgba(43,43,43,0.05) 57%,rgba(230,230,230,0.05) 57%,rgba(230,230,230,0.05) 89%,rgba(120,120,120,0.05) 89%,rgba(120,120,120,0.05) 100%),linear-gradient(241deg,rgba(200,200,200,0.05) 0%,rgba(200,200,200,0.05) 14%,rgba(46,46,46,0.05) 14%,rgba(46,46,46,0.05) 60%,rgba(10,10,10,0.05) 60%,rgba(10,10,10,0.05) 69%,rgba(91,91,91,0.05) 69%,rgba(91,91,91,0.05) 100%),linear-gradient(249deg,rgba(74,74,74,0.05) 0%,rgba(74,74,74,0.05) 32%,rgba(107,107,107,0.05) 32%,rgba(107,107,107,0.05) 35%,rgba(53,53,53,0.05) 35%,rgba(53,53,53,0.05) 51%,rgba(74,74,74,0.05) 51%,rgba(74,74,74,0.05) 100%),linear-gradient(92deg,hsl(214,0%,89%),hsl(214,0%,89%))');
        document.documentElement.style.setProperty('--color-Name', 'linear-gradient(270deg, hsla(281, 54%, 51%, 1) 0%, hsla(220, 48%, 54%, 1) 100%)');
        document.documentElement.style.setProperty('--color-T1', '#0099ffb3');
        document.documentElement.style.setProperty('--color-T3', '#9CFFFAb3');
        document.documentElement.style.setProperty('--color-T2', '#ffffff80');
        document.documentElement.style.setProperty('--color-BG', '#cbcdc4');
        document.documentElement.style.setProperty('--color-BG2', '#d4d4d4');
        document.documentElement.style.setProperty('--color-BG3', '#bfbfbf');
        document.documentElement.style.setProperty('--color-P', '#404040');
        document.documentElement.style.setProperty('--color-shadow', '#000000b3');
    };

    const changeColors = () => {
      if (isDarkMode) {
        applyDarkModeColors();
      } else {
        applyOriginalColors();
      }
    };

    changeColors();
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('colorChanged', String(isDarkMode));
  };

  return (
    <>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <span role="img" aria-label="Dark Mode">🌙</span>
        ) : (
          <span role="img" aria-label="Light Mode">☀️</span>
        )}
      </button>
    </>
  );
};

export default DarkMode;
