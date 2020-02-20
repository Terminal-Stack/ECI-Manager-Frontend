  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SemesterGrades from './components/SemesterGrades';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Album from './components/noticeView';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news">
          <Album />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/grades">
          <SemesterGrades />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
