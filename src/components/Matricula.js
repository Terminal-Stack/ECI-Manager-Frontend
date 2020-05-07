import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from "@material-ui/core/Toolbar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TuitionsDataService from '../_services/TuitionsDataService'
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import { colors } from '@material-ui/core';
function valid_credit_card(value) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;
 
  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0, bEven = false;
  value = value.replace(/\D/g, "");
 
  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);
 
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
 
    nCheck += nDigit;
    bEven = !bEven;
  }
 
  return (nCheck % 10) == 0;
}
 
export default function PaymentForm() {
  const Tution={
    "value":null,
    "studentCollegeId":null,
    "paid": false
};
  var date = new Date()
  const [estados,setEstados]=useState(0);
  const [idEstudent,setIdEstudent]=useState(0);
  const [valor,setValor]=useState(0);
  const handleDes = (event) => {
    setEstados(event.target.value);
  };
  const handlevalor = (event) => {
    setValor(event.target.value);
  };
  const handleid = (event) => {
    setIdEstudent(event.target.value);
  };
  function createTuti(){
    TuitionsDataService.CreateTution(Tution);
  }
  function handleLog(e) {
    e.preventDefault();
    window.location.replace("/ListaServicios");
}
const styles = theme => ({
  multilineColor:{
      color:'red'
  },
  root: {
    background: "black"
  },
  input: {
    color: "white"
  }
});
 
  
  const handleNext = () => {
    console.log(estados);
    console.log(idEstudent);
    console.log(valor);
    Tution.value=valor;
    Tution.studentCollegeId=idEstudent;
    createTuti(Tution);
    console.log(Tution);
  };
  const fondo={ 
    backgroundColor: '#89D0FF  ',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height:"1000px",
    
    
  };
  const boton0 ={
    background:"#0D3EF4",
    width: "100%",
    height :"100%"
};
  const typografia={
    fontweight: "bold",
    fontFamily: "cursive",
  };
  const prueba={
    left:15,
    color:" #EBF4FA" ,
    fontweight: "bold",
    fontFamily: "cursive",
  }
  const botonEnv={
    left:15,
    
  }
  return (
    <React.Fragment>
      <CssBaseline />
            <AppBar position="relative" color='secondary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        PAGO DE MATRICULA
                    </Typography>
                </Toolbar>
                <Button variant="contained" style={boton0} color="secondary" onClick={handleLog}  >
                    Volver
                </Button>
            </AppBar>
      <body style={fondo}>
 
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style={prueba}>
          <TextField onChange={handleid} required id="cardName" label=" Carnet Estudiante " fullWidth style={prueba} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="expDate" label={'FECHA : ' + '' + '' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()} fullWidth disabled />
 
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required onChange={handlevalor} id="cardNumber" label="Valor a pagar" fullWidth style={prueba}/>
          {valid_credit_card()}
        </Grid>
 
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handleDes}
            id="descripcion"
            label="descripcion"
            helperText="detalles de la matriculas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={botonEnv}
          >
            pagar
 
          </Button>
        </Grid>
      </Grid>
      </body>
    </React.Fragment>
  );
}