import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/RegisterLogin/login';
import Register from './components/RegisterLogin/register'

function App() {
  return (
    <div >
        <Switch>
          <Route path="/dashboard/login" component= {Login} />
          <Route path="/dashboard/register" component= {Register} />
        </Switch>
    </div>
  );
}

export default App;
