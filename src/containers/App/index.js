


import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home/index';


const App = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          
        </Switch>
      </main>
    </div>
  );
};

export default App;

