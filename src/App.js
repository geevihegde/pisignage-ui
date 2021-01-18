import './App.css';
import {Route,Switch} from 'react-router-dom';
import React, {Component} from 'react';
import {Login} from './component/Login';
import { ForgotPass } from './component/ForgotPass';
import {SignUp} from './component/SignUp';
import {ResellerSignup} from './component/ResellerSignup'
import {Err} from './component/Err'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={SignUp}/>
        <Route path="/forgot" component={ForgotPass}/>
        <Route path="/reseller-signup" component={ResellerSignup}/>
        <Route component={Err}/>
      </Switch>
    </div>
  );
}

export default App;
