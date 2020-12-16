import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PageWrapper from './containers/PageWrapper';
import history from './history';

const App: React.FC = () => {

  return (
    <div className="root">
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/:page_type" component={PageWrapper} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
