import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressFrom';
import PaymentForm from './PaymentFrom';
import Review from './Review';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.escuelaing.edu.co/es/">
        Escuela Colombiana de Ingeniería Julio Garavito
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Información pago', 'Detalles de pago', 'Resumen pago'];




export default function Checkout() {
  const [product, setProduct] = useState('');
  const [cardNumber, setCardNumber] = useState(0);
  const [cardExpiry, setCardExpiry] = useState('');
  const [owner, setOwner] = useState('');
  const [cardCVV, setCVV] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const func =  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm product= {product} setProduct={setProduct.bind(this)} owner={owner} setOwner={setOwner.bind(this)}/>;
      case 1:
        return <PaymentForm cardNumber={cardNumber} setCardInfo={setCardNumber.bind(this)}
                            cardExpiry={cardExpiry} setCardExpiry={setCardExpiry.bind(this)}
                            cardCVV={cardCVV} setCVV={setCVV.bind(this)}
                            cardHolder={cardHolder} setCardHolder={setCardHolder.bind(this)}
        />;
      case 2:
        return <Review product= {product}
                       owner={owner}
                       cardNumber={cardNumber}
                       cardExpiry={cardExpiry}
                       cardCVV={cardCVV}
                       cardHolder={cardHolder}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function handleVolver(e) {
    e.preventDefault();
    window.location.replace("/");
  }
  return (
    <React.Fragment>
      <AppBar position="relative" color='secondary'>
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
            Certificados
          </Typography>
        </Toolbar>
        <Button variant="contained" color="secondary" onClick={handleVolver}  >
          volver
                </Button>
      </AppBar>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Pagos
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por su pago.
                </Typography>
                <Typography variant="subtitle1">
                  Su número de factura es {} 
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {func(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}