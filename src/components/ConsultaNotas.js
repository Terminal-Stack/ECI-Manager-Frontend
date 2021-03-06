import React, { useState, useEffect } from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.escuelaing.edu.co/es/">
                Escuela Colombiana de Ingeniería Julio Garavito.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }, heroButtons: {
        marginTop: theme.spacing(6),
    },
}))
const fondos = {

    //backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
    //backgroundPosition: 'center',
    //backgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat'
}
const boton ={
    background:"#81d8d0",
    width: "300x",
    height :"60px",
    top:"200px"
    
};
const divi= {
    width: "100%",
    backgroundColor: '#89D0FF  ',
    height :"800px",
  }
export default function ConsultaNotas() {



    function handleVolver(e) {
        e.preventDefault();
        window.location.replace("/");
    }
    function handleNotas(e) {
        e.preventDefault();
        window.location.replace("/grades");
    }
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="relative"  color='primary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        Consulta de notas
                    </Typography>
                </Toolbar>

            </AppBar>
            <main style={divi}>
                <Container >
                    
                        <Container >
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">

                                    <Grid item>
                                        <Button variant="contained" style={boton} color="secondary" onClick={handleNotas}>
                                            Consultar notas
                                    </Button>
                                    </Grid>
                                </Grid>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Grid container spacing={2} justify="center">

                                    <Grid item>
                                        <Button variant="contained" style={boton} color="secondary" onClick={handleVolver}  >
                                            volver
                                        </Button>
                                    </Grid>
                                </Grid>
                                
                                
                                

                            </div>
                        </Container>
                   
                </Container>
            </main>
            <Copyright />
        </React.Fragment>
    )
}