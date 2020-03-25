  
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
import Checkout from './components/Checkout';
import Electivas from './components/VistaElectivas';
import ListaServicios from './components/ListaServicios';
import './App.css';
import { Redirect } from 'react-router-dom';


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
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/electivas">
          <Electivas />
        </Route>
        <Route path="/listaServicios">
          <ListaServicios/>
        </Route>

        
      </Switch>
    </Router>
  );
}

export default App;
