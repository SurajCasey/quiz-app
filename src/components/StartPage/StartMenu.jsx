import React, { useState, useEffect } from 'react';
import SelectionElement from '../Elements/SelectionElement';
import Darkmode from '../Elements/Darkmode';
import Questions from './Questions';
import Docs from '../../../data.json';

const StartMenu = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [theme, setTheme] = useState('light'); // Lift theme state here

  // Apply theme to document
  useEffect(() => {
    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add('dark');
      document.body.style.backgroundColor = '#313E51';
      document.body.style.color = '#FFFFFF';
      
    } else {
      element.classList.remove('dark');
      document.body.style.backgroundColor = '#F4F6FA';
      document.body.style.color = '#313E51';
    }
  }, [theme]);

  return (
    <div>
      {!selectedQuiz ? (
        <div className="w-full h-screen flex flex-col items-center">
          <div className="w-[1101px] pt-[97px] flex justify-between
          max-md:max-w-[640px] max-md:w-full max-md:pt-[54px]">
            <div></div>
            <Darkmode theme={theme} setTheme={setTheme} />
          </div>
          <div className="flex  gap-33 mt-24
                    max-md:flex-col max-md:gap-16  max-md:mt-16         
            ">
            <div>
              <h1 className="text-6xl font-light">
                Welcome to the
                <br />
                <span className="font-medium">Frontend Quiz!</span>
              </h1>
              <p className="text-xl text-grey-navy italic leading-1.5 pt-12 dark:text-light-bluish
                max-md:pt-4
              ">
                Pick a subject to get started
              </p>
            </div>
            <div>
              <SelectionElement onSelectQuiz={setSelectedQuiz} />
            </div>
          </div>
        </div>
      ) : (
        <Questions quiz={Docs.quizzes.find((q) => q.title === selectedQuiz)} theme={theme} setTheme={setTheme} />
      )}
    </div>
  );
};

export default StartMenu;