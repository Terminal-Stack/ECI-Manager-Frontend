import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PerfectScrollbar from 'react-perfect-scrollbar'
import CargaDatos from '../CargaDatos';
import Certificaciones from './Certificaciones.PNG';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Escuela Colombiana de Ingenieria Julio Garavito
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
function handleVolver(e) {
    e.preventDefault();
    window.location.replace("/");
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '300%',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: "#FF8484 ",
        padding: theme.spacing(6),
    },
}));

const cards = [1];

export default function Album() {
    const fondo={ 
        backgroundColor: '#89D0FF  ',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height:"auto",
        
        
      };
    
    const myScrollbar = {
        width: 400,
        height: 400,
    };
    const classes = useStyles();
    function traerNoticias() {
        console.log('imprime');
        console.log(CargaDatos.getAllNews());
    };
    function handleLog(e) {
        e.preventDefault();
        window.location.replace("/login");
      }
    return (
        
        <React.Fragment >
            
            <AppBar position="relative" color='secondary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        Calendario Academico
                    </Typography>
                </Toolbar>
                <Button variant="contained" color="primary" onClick={handleVolver}  >
                    volver
                </Button>
            </AppBar>
            <CssBaseline />
            
            <main style={fondo}>
                {/* Hero unit */}
            
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={1} alignItems="center"
                                >
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} >
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={Certificaciones}
                                        title="Image title"
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
            
                
                <Copyright />
            </footer>
            {/* End footer */}

        </React.Fragment>
    );
}