import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
        var date = new Date()
        
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pago Matricula 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label=" Carnet Estudiante " fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField  id="expDate" label={ 'FECHA : '+'' +''+ date.getDate()+'/'+ (date.getMonth()+1)+'/' +date.getFullYear()} fullWidth disabled/>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Valor a pagar" fullWidth />
          {valid_credit_card()}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Ultimos tres digitos detras de la tarjeta"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
