import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Project from './pages/project/project';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/project/:id" component={Project}/>
        <Route path="/" component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
