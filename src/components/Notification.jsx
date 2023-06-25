import React from 'react';
import propTypes from 'prop-types';
// ? // Компонент нотифікацій якщо відгуків ще немає ;
const Notification = ({ message = 'There is no feedback' }) => (
  <h4>{message}</h4>
);
Notification.propTypes = {
  message: propTypes.string,
};
export default Notification;
