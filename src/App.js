import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ToDoTable from './Components/ToDoTable'
import Header from './Components/layout/Header';
import About from './Components/pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <ToDoTable />
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
    
  );
}

export default App;
