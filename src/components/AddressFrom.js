import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(prop) {
  const currencies = [

    {
      value: 'Matricula',
    },
    {
      value: 'Multa biblioteca',
    },
    {
      value: 'Certificaciones',
    },{
      value: 'Seleccione el pago que realizará',
    }
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
    //alert(currency)
  };
  const handleChangeO = (event) => {
    setOwnerN(event.target.value);
  };
  const handleChangeApe = (event) => {
    setOwnerA(event.target.value);
  };

  const [ownerN, setOwnerN] = useState('');
  const [ownerA, setOwnerA] = useState('');
  const [currency, setCurrency] = React.useState('Seleccione el pago que realizará');
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombres"
            onChange={handleChangeO}
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellidos"
            onChange={handleChangeApe}
            fullWidth
            autoComplete="lname"
          />

        </Grid>
        {prop.setOwner(ownerN+" "+ownerA)}
        <Grid item xs={12}>
          <TextField
            required
            id="Numero Documento"
            name="Numero Documento"
            label="Número documento"
            fullWidth
            autoComplete="billing Numero Documento"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              select
            id="TipoPago"
            name="Tipopago"
            label="Tipo pago"
            fullWidth
            value={currency}
            onChange={handleChange}
            autoComplete="billing TipoDocumento"
          >
          {currencies.map((option) => (
              <MenuItem id='item' key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
          ))}

          </TextField>
        </Grid>
        {prop.setProduct(currency)}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Estado/Región/Providencia" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}