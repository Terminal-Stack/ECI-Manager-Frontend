import React, {useEffect, useState} from 'react';
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
import TuitionsDataService from "../_services/TuitionsDataService";
import AuthenticationService from "../_services/AuthenticationService";
import GradesDataService from "../_services/GradesDataService";
import PenaltyDataService from "../_services/PenaltyDataService";
import InvoiceDataServices from "../_services/InvoiceDataService";
import CertificadosService from "../_services/CertificadosService";


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

const verificar = function valid_credit_card(value) {
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


export default function Checkout() {
  const [product, setProduct] = useState('');
  const [cardNumber, setCardNumber] = useState(0);
  const [cardExpiry, setCardExpiry] = useState('');
  const [owner, setOwner] = useState('');
  const [cardCVV, setCVV] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [price, setPrice] = useState(0);
  const [carnet, setCarnet] = useState(0);
  const [multa, setMulta] = useState(0);
  const [certificado, setCertificado] = useState(0);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const date = new Date()
  const idFactura= date.getFullYear()+""+date.getMonth()+""+date.getDay()+""+date.getHours()+""+date.getMinutes()+""+date.getSeconds()

  const matricula = function (){
    TuitionsDataService.retrieveTuition(carnet).then(response => {
      setPrice(response.data.value);
    })
        .catch(error => console.log("Error retrieving pays " + error));
  }
  const penalty = function (){
    setPrice(multa)
  }
  const certificacion = function(){
      CertificadosService.retrieveCertificado().then(response => {
      setPrice(response.data.price);
  })}
  //Hay que hacer el del certificado y el de las multas
  useEffect(() => {
      GradesDataService.retrieveStudent(AuthenticationService.getLoggedInUserName()).then(responseu =>{
      setCarnet(responseu.data.collegeId);
      setMulta(responseu.data.penalty)
      //If en el que llame una funcion dependiendo del valor escogido
      if(product === "Matricula"){
        matricula()
      }
      else if(product === "Multa biblioteca"){
        penalty()
        PenaltyDataService.payPenalty(carnet)
      }
      else if(product === "Certificaciones"){
        certificacion()
      }
      else{
        setPrice(0)
      }
    })
  });
  function createInvoice(e){
    //console.log(e)
    InvoiceDataServices.postInvoice(e)
  }
  function postInvoic(){

    var invoice = {
      "id" : null,
      "value": null,
      "description": null,
      "date": null,
      "studentId":null
    }
    invoice.id = idFactura
    invoice.value = price
    invoice.studentId=carnet
    invoice.description="Pago de "+product
    invoice.date = date

    createInvoice(invoice)

  }
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
                       cardHolder={cardHolder}
                       price= {price}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  var flag = 1;
  const handleNext = () => {
    try {
      if (activeStep === 2) {
        postInvoic()
        setActiveStep(activeStep + 1);
      } else if (activeStep === 1) {

          var isFormat = /^\d{4}-\d{2}/.test(cardExpiry)
          if (verificar(cardNumber) & cardCVV.length === 3 & isFormat & cardHolder !== '') {
            setActiveStep(activeStep + 1);
          } else {
            alert("Datos de Tarjeta invalidos")
          }


      } else if (activeStep === 0) {
        if(product !== '' & product !=='Seleccione el pago que realizará') {
          if (product === "Multa biblioteca" & price != 0) {
            if (owner != '') {
              setActiveStep(activeStep + 1);
            } else {
              alert("Llene todos los datos")
            }
          } else {
            alert("Usted no tiene multas")
            setActiveStep(activeStep - 1);
          }
        }
        else {
          alert("Seleccione un producto a pagar")
        }

      }
      else {
        setActiveStep(activeStep + 1);
      }
    }catch(e){
      alert("Ingrese los datos completos")
    }

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function handleVolver(e) {
    e.preventDefault();
    window.location.replace("/");
  }
  const fondo={ 
    backgroundColor: '#89D0FF  ',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height:"1000px",  
  };
  return (
    <React.Fragment>
      <AppBar position="relative" color='secondary'>
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
            Certificados
          </Typography>
        </Toolbar>
        <Button variant="contained" color="primary" onClick={handleVolver}  >
          volver
                </Button>
      </AppBar>
      <CssBaseline />

      <main className={classes.layout} >
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
                  Su número de factura es #{idFactura}. Su pago quedo registrado.
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
