import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import InputForm from './components/InputForm'
import InputForm2 from './components/InputForm2'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
       
      <Switch>
          <Route exact path='/'render={ () => <Home/>}/>
          <Route path='/Movies'component={InputForm}/>
          <Route path='/Shows'component={InputForm2}/>

      </Switch>
      </header>
    </div>
  );
}

export default App;
