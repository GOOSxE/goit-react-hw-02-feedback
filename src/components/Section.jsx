import React from 'react';
import propTypes from 'prop-types';
// ? // Компонент секції в який огортаються інші компоненти, та який приймає потрібний тайтл ;
const Section = ({ title = 'Section title', children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
export default Section;
