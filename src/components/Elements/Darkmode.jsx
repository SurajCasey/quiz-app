import React from 'react';
import sun1 from '../../assets/assets/images/icon-sun-light.svg';
import sun2 from '../../assets/assets/images/icon-sun-dark.svg';
import moon1 from '../../assets/assets/images/icon-moon-light.svg';
import moon2 from '../../assets/assets/images/icon-moon-dark.svg';

const Darkmode = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-row gap-4">
      {/* Sun Icon */}
      <img src={theme === 'dark' ? sun1 : sun2} alt="sun icon" />

      {/* Toggle button */}
      <button
        onClick={handleThemeSwitch}
        className="relative w-12 h-7 flex items-center rounded-full p-1 transition duration-300 bg-purple"
      >
        <div
          className={`w-[20px] h-[20px] bg-pure-white rounded-full shadow-md transform transition duration-300 ${
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>

      {/* Moon Icon */}
      <img src={theme === 'dark' ? moon1 : moon2} alt="moon icon" />
    </div>
  );
};

export default Darkmode;