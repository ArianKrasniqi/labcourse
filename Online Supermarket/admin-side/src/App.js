import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './hoc/auth';

import Login from './components/RegisterLogin/login';
import Register from './components/RegisterLogin/register'
import HomePage from './components/HomePage/index';
import NavBar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{paddingTop: '69px', minHeight: 'calc(100vh - 80 px' }}>
        <Switch>
          <Route exact path="/" component= {Auth(HomePage, null)} />
          <Route exact path="/login" component= {Auth(Login, false)} />
          <Route exact path="/register" component= {Auth(Register, false)} />
        </Switch>
    </div>
    <Footer />
    </Suspense>
  );
}

export default App;
