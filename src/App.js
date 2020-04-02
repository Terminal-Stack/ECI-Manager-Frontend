  
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
import ConsultaNotas from './components/ConsultaNotas';
import Calendar from './components/Calendar'
import PrivateRoute from './components/PrivateRoute';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news"  component={Album} />  
        <Route path="/calendar"  component={Calendar} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/grades"  component={SemesterGrades} />
        <Route path="/checkout"  component={Checkout} />
        <Route path="/electivas"  component={Electivas} />
        <Route path="/listaServicios" component={ListaServicios} />
      </Switch>
    </Router>
  );
}

export default App;
