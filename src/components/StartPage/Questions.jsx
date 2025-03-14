import React, { useState } from 'react';
import Darkmode from '../Elements/Darkmode';
import Score from './Score';
import img1 from '../../assetsimages/icon-html.svg';
import img2 from '../../assets/images/icon-css.svg';
import img3 from '../../assets/images/icon-js.svg';
import img4 from '../../assets/images/icon-accessibility.svg';
import errorimg from '../../assets/images/icon-error.svg';
import correctimg from '../../assets/images/icon-correct.svg';

const Questions = ({ quiz, theme, setTheme }) => {
  if (!quiz) return null;

  const quizImages = {
    HTML: img1,
    CSS: img2,
    JavaScript: img3,
    Accessibility: img4,
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showError, setShowError] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    setShowError(false);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setShowError(true);
      return;
    }
    setIsAnswered(true);
    setShowError(false);

    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowError(false);
    }
  };

  const quizImage = quizImages[quiz.title];
  const progressPercentage = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="flex flex-col items-center my-21 max-md:my-10">
      <div className="w-full max-w-[1101px] max-md:max-w-[640px] flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <img
            src={quizImage}
            alt={`${quiz.title} logo`}
            className={`selectionimg ${
              quiz.title === 'HTML'
                ? 'bg-orange-100'
                : quiz.title === 'CSS'
                ? 'bg-green-100'
                : quiz.title === 'JavaScript'
                ? 'bg-blue-100'
                : 'bg-purple-100'
            }`}
          />
          <h1 className="font-medium text-3xl">{quiz.title}</h1>
        </div>
        <Darkmode theme={theme} setTheme={setTheme} />
      </div>

      {isLastQuestion && isAnswered ? (
        <Score score={score} totalQuestions={quiz.questions.length} quizTitle={quiz.title} />
      ) : (
        <div className="flex w-full max-w-[1101px]  mt-21 justify-between gap-4
               max-md:max-w-[640px] max-md:flex-col max-md:gap-16 max-md:mt-12
        ">
          <div 
            className="max-w-md flex flex-col justify-between
                        max-md:max-w-full max-md:gap-10 "
          >
            <div>
                <div className='max-md:mb-7'>
                Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </div>
                <div className="font-medium text-4xl text-dark-navy dark:text-pure-white">
                <h1>{currentQuestion.question}</h1>
                </div>
            </div>
            
            <div className="mb-[112px] max-md:mb-0 w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="">
            <div>
              <ul>
                {currentQuestion.options.map((option, optIndex) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentQuestion.answer;

                  return (
                    <li
                      key={optIndex}
                      onClick={() => !isAnswered && handleAnswerSelect(option)}
                      className={`questionscard cursor-pointer w-full max-w-[564px] mb-2 border flex justify-between items-center 
                                    max-md:max-w-full
                                ${
                                    isAnswered
                                    ? isCorrect && isSelected
                                        ? 'border-2 border-green-500'
                                        : isSelected
                                        ? 'border-2 border-red-500'
                                        : 'border-none'
                                    : 'border-transparent hover:border-purple-500 active:border-purple-700'
                                } `}
                    >
                      <div className="flex gap-8 items-center ">
                        <span
                          className={`py-3 px-5 rounded-2xl ${
                            isAnswered
                              ? isCorrect && isSelected
                                ? 'bg-green-500 text-white'
                                : isSelected
                                ? 'bg-red-500 text-white'
                                : 'bg-purple-100 text-purple-500'
                              : selectedAnswer === option
                              ? 'bg-purple-500 text-white'
                              : 'bg-purple-100 text-purple-500'
                          }`}
                        >
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        {option}
                      </div>
                      {/* Feedback Images */}
                      {isAnswered && (
                        <>
                          {isSelected && !isCorrect && (
                            <img src={errorimg} alt="error" className=" w-10 h-10" />
                          )}
                          {isCorrect && (
                            <img src={correctimg} alt="correct" className="w-10 h-10" />
                          )}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              className="button"
              onClick={isAnswered ? handleNextQuestion : handleSubmit}
            
            >
              {isAnswered ? 'Next Question' : 'Submit Answer'}
            </button>

            {/* Error Message */}
            {showError && (
              <div className="flex gap-2 mt-9 justify-center items-center">
                <img src={errorimg} alt="error image" />
                <p className="text-red-500 font-normal text-2xl">
                  Please select an answer
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;