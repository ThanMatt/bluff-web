import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home'

import './assets/css/styles.css';

const App = () => {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
