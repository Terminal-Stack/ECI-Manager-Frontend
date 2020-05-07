  
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
import Certificaciones from './components/Certificaciones';
import PrivateRoute from './components/PrivateRoute';
import Matricula from './components/Matricula';
import Horario from './components/Horario';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" exact component={Album} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
<<<<<<< HEAD
        <PrivateRoute path="/matricula" component={Matricula} />
=======
        <Route path="/matricula" component={Matricula}/>
>>>>>>> a3cd23ee84e4e20b7e26a50b432c056404345165
        <PrivateRoute path="/tuition" exact component={Matricula}/>
        <PrivateRoute path="/grades" exact component={SemesterGrades} />
        <PrivateRoute path="/checkout" exact component={Checkout} />
        <PrivateRoute path="/electivas" exact component={Electivas} />
        <PrivateRoute path="/" exact component={ListaServicios} />
        <PrivateRoute path="/consultaNotas" exact component={ConsultaNotas} />
        <PrivateRoute path="/certificaciones" exact component={Certificaciones} />
        <PrivateRoute path="/horario" exact component={Horario} />
      </Switch>
    </Router>
  );
}

export default App;
