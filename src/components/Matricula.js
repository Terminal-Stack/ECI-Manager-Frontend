import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
  const handleNext = () => {
    console.log(estados);
    console.log(idEstudent);
    console.log(valor);
    Tution.value=valor;
    Tution.studentCollegeId=idEstudent;
    console.log(Tution);
  };
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pago Matricula
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField onChange={handleid} required id="cardName" label=" Carnet Estudiante " fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="expDate" label={'FECHA : ' + '' + '' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()} fullWidth disabled />

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required onChange={handlevalor} id="cardNumber" label="Valor a pagar" fullWidth />
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

          >

          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
