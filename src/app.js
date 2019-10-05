import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout  from './components/layout';
import Content, { renderRoutes }  from './components/content';
import NotFoundPage  from './components/notFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Content}/>
          {renderRoutes()}
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
