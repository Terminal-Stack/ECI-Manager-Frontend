import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  const currencies = [
    {
      value: 'MAT',
      label: 'Matricula',
    },
    {
      value: 'MUL',
      label: 'Multa biblioteca',
    },
    {
      value: 'CERT',
      label: 'Certificaciones',
    }
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [currency, setCurrency] = React.useState('CERT');
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
            fullWidth
            autoComplete="lname"
          />
        </Grid>
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
            id="TipoDocumento"
            name="TipoDocumento"
            label="Tipo pago"
            fullWidth
            value={currency}
            onChange={handleChange}
            autoComplete="billing TipoDocumento"
          >
          {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
          ))}
          </TextField>
        </Grid>
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