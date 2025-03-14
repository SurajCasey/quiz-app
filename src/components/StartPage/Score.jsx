import React from 'react';
import QuizHeader from '../Elements/QuizHeader';

const Score = ({ score, totalQuestions, quizTitle }) => {

  // Reset function to go back to StartMenu
  const handlePlayAgain = () => {
    window.location.reload(); // Simple reset; we'll refine this later
  };

  return (
    <div className="w-full max-w-[1101px] flex flex-row justify-between mt-20
        max-md:flex-col max-md:gap-16  max-md:mt-12 max-md:max-w-[640px]
    ">
        <div>
            <h2 className="text-6xl font-light text-dark-navy dark:text-pure-white">
                Quiz Completed <br />
                <span className='font-medium'>You Scored...</span>
            </h2>
        </div>
      <div>
            <div className="bg-white dark:bg-navy p-12 rounded-4xl shadow-lg w-96 text-center 
                max-md:w-[640px] max-md:flex max-md:flex-col max-md:items-center
            ">
                
                <div className="flex justify-between items-center">
                    <QuizHeader quizTitle={quizTitle} /> {/* Use the new component */}
                </div>

                <p className="text-2xl text-dark-navy dark:text-pure-white mb-4">
                <span className="font-medium text-[144px]">{score}</span> <br /> out of{' '}
                {totalQuestions}
                </p>
            
            </div>
            <button
                onClick={handlePlayAgain}
                className="button mt-6  bg-purple-500 text-white hover:bg-purple-600"
                >
                Play Again
            </button>
        </div>
    </div>
  );
};

export default Score;