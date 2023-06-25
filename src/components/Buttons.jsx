import React from 'react';
import propTypes from 'prop-types';
// ? // Компонент кнопок що приймає масив з опціями для рендеру, та функцію для обробки кліків ;
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option, index) => (
      <li key={index}>
        <button onClick={onLeaveFeedback} name={option}>
          {option.replace(option[0], option[0].toUpperCase())}
        </button>
      </li>
    ))}
  </ul>
);
FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;

// todo // Тут є функція що робить першу букву стрінги великою :
// * // string.replace(string[0], string[0].toUpperCase()) ;