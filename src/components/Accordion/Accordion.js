import React from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import { subheadTitle, subhead } from './Accordion.module.css';
import PropTypes from 'prop-types';

const Accordion = ({
  subhead_title,
  questions,
  questionId,
  changeId,
  location,
  chapter,
}) => {
  return (
    <li className={subhead}>
      <h2 className={subheadTitle}>{subhead_title}</h2>
      <ul>
        {[
          ...questions
            .sort((a, b) => a.question_range - b.question_range)
            .map(question => {
              return (
                <AccordionItem
                  key={question.id}
                  data={question}
                  titleId={questionId}
                  changeId={changeId}
                  location={location}
                  chapter={chapter}
                />
              );
            }),
        ]}
      </ul>
    </li>
  );
};

export default Accordion;

Accordion.propTypes = {
  subhead_title: PropTypes.string.isRequired,
  // questions: PropTypes.arrayOf(PropTypes.shape({})),
  questionId: PropTypes.string.isRequired,
  // changeId,
  // location,
  chapter: PropTypes.string.isRequired,
};
