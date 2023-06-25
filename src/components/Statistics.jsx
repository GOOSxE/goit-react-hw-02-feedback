import React from 'react';
import propTypes from 'prop-types';
// ? // Компонент статистики в який передаються дані, та функції для їх обробки ;
const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {countTotalFeedback(good, neutral, bad)}</li>
    <li>
      Positive feedback:{' '}
      {countTotalFeedback(good, neutral, bad) > 0
        ? countPositiveFeedbackPercentage(good, neutral, bad)
        : 0}
      %
    </li>
  </ul>
);
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  countTotalFeedback: propTypes.func.isRequired,
  countPositiveFeedbackPercentage: propTypes.func.isRequired,
};
export default Statistics;