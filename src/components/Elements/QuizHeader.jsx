import React from 'react';
import img1 from '../../assets/assets/images/icon-html.svg';
import img2 from '../../assets/assets/images/icon-css.svg';
import img3 from '../../assets/assets/images/icon-js.svg';
import img4 from '../../assets/assets/images/icon-accessibility.svg';

const quizImages = {
  HTML: img1,
  CSS: img2,
  JavaScript: img3,
  Accessibility: img4,
};

const QuizHeader = ({ quizTitle }) => {
  const quizImage = quizImages[quizTitle];

  return (
    <div className="flex gap-6 items-center">
      <img
        src={quizImage}
        alt={`${quizTitle} logo`}
        className={`selectionimg ${
          quizTitle === 'HTML'
            ? 'bg-orange-100'
            : quizTitle === 'CSS'
            ? 'bg-green-100'
            : quizTitle === 'JavaScript'
            ? 'bg-blue-100'
            : 'bg-purple-100'
        }`}
      />
      <h1 className="font-medium text-3xl">{quizTitle}</h1>
    </div>
  );
};

export default QuizHeader;