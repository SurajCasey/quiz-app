import React from 'react';
import img1 from '../../assets/assets/images/icon-html.svg';
import img2 from '../../assets/assets/images/icon-css.svg';
import img3 from '../../assets/assets/images/icon-js.svg';
import img4 from '../../assets/assets/images/icon-accessibility.svg';

const SelectionElement = ({ onSelectQuiz }) => {
  const quizzes = [
    { title: 'HTML', img: img1, bgClass: 'bg-orange-100' },
    { title: 'CSS', img: img2, bgClass: 'bg-green-100' },
    { title: 'JavaScript', img: img3, bgClass: 'bg-blue-100' },
    { title: 'Accessibility', img: img4, bgClass: 'bg-purple-100' },
  ];

  const handleQuizSelect = (title) => {
    setTimeout(() => {
      onSelectQuiz(title);
    }, 1000); 
  };

  return (
    <div className="w-[564px] flex-shrink flex flex-col gap-6">
      {quizzes.map((quiz) => (
        <div
          key={quiz.title}
          className="selectioncard cursor-pointer"
          onClick={() => handleQuizSelect(quiz.title)}
        >
          <img
            src={quiz.img}
            className={`selectionimg ${quiz.bgClass}`}
            alt={`${quiz.title} logo`}
          />
          {quiz.title}
        </div>
      ))}
    </div>
  );
};

export default SelectionElement;