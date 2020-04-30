import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(2.5),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#E82F08',
        padding: theme.spacing(6),
    },
}));
const boton0 ={
    background:"#81d8d0",
    width: "100%",
    height :"100%"
};
const boton ={
    background:"#81d8d0",
    width: "218%",
    height :"40px"
};
const boton1={
    background:"#81d8d0",
    width: "128%",
    height :"40px"
}
const boton2={
    background:"#81d8d0",
    width: "124%",
    height :"40px"
}
const boton3={
    background:"#81d8d0",
    width: "118%",
    height :"40px"
}
const boton4={
    background:"#81d8d0",
    width: "101%",
    height :"40px"
}
const boton5={
    background:"#81d8d0",
    width: "103%",
    height :"40px"
}
const boton6={
    background:"#81d8d0",
    width: "118%",
    height :"40px",
    
}
const carta={
    background:"#D1BF26"
    
}
const contenedor={
    flex: 4,
    padding: 2,
    backgroundColor: '#D1BF26'
}
const flag = false;
export default function ListaServicios() {

    
    const [state, setState] = React.useState({
        noticias: false,
        consulnotas: false,
        certinotas: false,
        logout : false
        
    });
    function handleClick(e) {
        e.preventDefault();
        window.location.replace("/news");
    }
    function handleClick5(e) {
        e.preventDefault();
        window.location.replace("/calendar");
    }
    function handleClick2(e) {
        e.preventDefault();
        window.location.replace("/consultaNotas");
    }
    function handleClick3(e) {
        e.preventDefault();
        window.location.replace("/checkout");
    }
    function handleClick4(e) {
        e.preventDefault();
        window.location.replace("/electivas");
    }
    function handleLog(e) {
        e.preventDefault();
        window.location.replace("/login");
    }
    function handleClick8(e) {
        e.preventDefault();
        window.location.replace("/horario");
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative" color='secondary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        Lista de servicios Escuela Colombiana de Ingeniería Julio Garavito.
                    </Typography>
                </Toolbar>
                <Button variant="contained" style={boton0} color="secondary" onClick={handleLog}  >
                    Desconectarse
                </Button>
            </AppBar>
            <main>


                
                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1.5} justify="center"style={carta} widht="200px">

                                <Grid item>
                                    <Button variant="contained" style={boton} color="secondary" onClick={handleClick}>
                                        noticias
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                
                
                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1.5} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={boton1} color="secondary" onClick={handleClick2}>
                                        consultar notas             
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>


                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={boton2   } color="secondary" onClick={handleClick4}>
                                        Lista de electivas
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                
                
                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1.5} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={boton3} color="secondary" onClick={handleClick4}>
                                        materias electivas
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                
                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1.5} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={boton4} color="secondary" onClick={handleClick3}>
                                        certificado de estudio
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>

                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={boton5} color="secondary" onClick={handleClick5} >
                                        calendario academico
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>

                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1.5} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={boton6} color="secondary" onClick={handleClick8}>
                                        Consultar Horario
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                
                    
            </main>

            <Copyright />
        </React.Fragment>
    );
}
