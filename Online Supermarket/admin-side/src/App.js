import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/RegisterLogin/login';

function App() {
  return (
    <div >
        <Switch>
          <Route path="/dashboard/login" component= {Login}/>
        </Switch>
    </div>
  );
}

export default App;
