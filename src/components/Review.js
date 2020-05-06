import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TuitionsDataService from "../_services/TuitionsDataService";
import AuthenticationService from "../_services/AuthenticationService";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));


export default function Review(prop) {
  const date = new Date()
  const idFactura= date.getFullYear()+date.getMonth()+date.getDay()+date.getHours()+date.getMinutes()+date.getSeconds()
  const [price, setPrice] = useState(0);
  const products = [
    { name: prop.product, price: price }
  ];
  useEffect(() => {
    TuitionsDataService.retrieveTuition(AuthenticationService.getLoggedInUserName()).then(response => {
      console.log("tuition " + JSON.stringify(response));
      setPrice(response.data.value);
    })
        .catch(error => console.log("Error retrieving pays " + error));
    //alert(news.data._embedded.news)
  });
  const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
  const payments = [
    { name: 'Nombre del propietario ', detail: prop.cardHolder },
    { name: 'Número de tarjeta  ', detail: prop.cardNumber + " "+ prop.cardCVV},
    { name: 'Fecha expiración ', detail: prop.cardExpiry },
  ];
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Resumen del pago.
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {products[0].price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{prop.owner}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles del pago.
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}