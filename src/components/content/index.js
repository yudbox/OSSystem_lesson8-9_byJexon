import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import {
  Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,
} from './styled';
import lesson8 from '../../data/lesson8.json';
import lesson9 from '../../data/lesson9.json';
import lessonsTasks from '../lessons';

const lessons = [lesson8, lesson9];

const renderTopics = (topics, lessonName) => {
  return (
    <ul>
      {topics.map(({name: topicName, title, tasks}) => (
        <li key={topicName} >
          <h2>{title}</h2>
          <ul>
            {tasks.map((task, index) => {
              const path = getTaskPath(lessonName, topicName, index + 1);
              const Component = getTaskComponent(lessonName, topicName, index);
              if (!Component) return null;
              return (
                <li key={index} >
                  <Link to={path} className="" >{task.name}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const Content = ({ preExpandedLessons = ['8'] }) => {
  return (
    <Accordion preExpanded={preExpandedLessons} allowZeroExpanded={true} >
      {lessons.map((lesson) => (
        <AccordionItem key={lesson.name} uuid={lesson.name} >
          <AccordionItemHeading>
            <AccordionItemButton>
              <h1>{lesson.title}</h1>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {renderTopics(lesson.topics, lesson.name)}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

Content.propTypes = {
  preExpandedLessons: PropTypes.arrayOf(PropTypes.string),
};


export default Content;

export const renderRoutes = () => {
  const routes = [];
  lessons.forEach(lesson => {
    const { name: lessonName, topics } = lesson;
    topics.forEach(topic => {
      const {name: topicName, tasks} = topic;
      tasks.forEach((task, index) => {
        const path = getTaskPath(lessonName, topicName, index);
        const Component = getTaskComponent(lessonName, topicName, index);
        if (Component) {
          routes.push(<Route key={topicName + index} exact path={path} component={Component} />);
        }
      });
    });
  });
  return routes;
};

function getTaskPath(lessonName, topicName, taskNum) {
  return `/lesson${lessonName}/${topicName}/task${taskNum + 1}`;
}

function getTaskComponent(lessonName, topicName, taskNum) {
  const lessonTasks = lessonsTasks[lessonName];
  if (!lessonTasks || !lessonTasks[topicName]) return null;
  const Component = lessonTasks[topicName][taskNum];
  return Component ? Component : null;
}
