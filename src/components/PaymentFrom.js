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
export default function PaymentForm(prop) {
  const handleChangeCN = (event) => {
    prop.setCardInfo(event.target.value);
  };
  const handleChangeNP = (event) => {
    prop.setCardHolder(event.target.value);
  };
  const handleChangeF = (event) => {
    prop.setCardExpiry(event.target.value);
  };
  const handleChangeCVV = (event) => {
    prop.setCVV(event.target.value);
  };

  return (

    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nombre propietario (en la tarjeta)" fullWidth onChange={handleChangeNP}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Numero de tarjeta" fullWidth onChange={handleChangeCN}
                     inputProps={{ maxLength: 16 }}></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de expiración (AAAA-MM)" fullWidth onChange={handleChangeF} inputProps={{ maxLength: 7 }}/>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            inputProps={{ maxLength: 3 }}
            onChange={handleChangeCVV}
            helperText="Ultimos tres digitos detras de la tarjeta"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
