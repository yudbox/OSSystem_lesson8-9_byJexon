import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout  from './components/layout/index';
import Content, { renderRoutes }  from './components/content/index';
import NotFoundPage  from './components/notFoundPage';
import envVars from './env';

const { PRE_EXPANDED_LESSONS } = envVars;

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Content {...props} preExpandedLessons={PRE_EXPANDED_LESSONS} />
            )}
          />
          {renderRoutes()}
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
