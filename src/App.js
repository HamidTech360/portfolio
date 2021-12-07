import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Project from './pages/project/project';
import Register from './pages/register/register';
import SignIn from './pages/signIn/signIn';
import Upload from './pages/upload/upload';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/project/:id" component={Project}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
