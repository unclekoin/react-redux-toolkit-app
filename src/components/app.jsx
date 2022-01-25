import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../routes/home';
import Detail from '../routes/detail';

const App = () => {
  return (
    <div className="container pt-5">
      <Switch>
        <Route path="/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
