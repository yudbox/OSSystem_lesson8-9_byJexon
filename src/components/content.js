import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import contentData from '../data/content.json';
import tasksComponents from './tasks';


const renderTopic = ({name, title, tasks}) => {
  return (
    <div key={name} >
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => {
          const Component = tasksComponents[name][index];
          const path = `/${name}/task${index+1}`;
          if (!Component) return null;
          return (
            <li key={index} >
              <Link to={path} className="" >{task.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Content = () => {
  return (
    <Fragment>
      <h1>{contentData.title}</h1>
      {contentData.topics.map(renderTopic)}
    </Fragment>
  );
};

export default Content;

export const renderRoutes = () => {
  return contentData.topics.map(topic => {
    const {name, tasks} = topic;
    const routes = tasks.map((task, index) => {
      const Component = tasksComponents[name][index];
      const path = `/${name}/task${index+1}`;
      return Component && <Route key={name + index} exact path={path} component={Component} />;
    });
    return routes;
  });
};
