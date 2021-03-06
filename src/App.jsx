import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Store from './components/Store.jsx';
import Item from './components/Item';
import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/store">
          <Store />
        </Route>

        <Route path="/store/:id">
          <Item />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
