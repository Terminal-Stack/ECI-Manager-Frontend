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
        flexDirection: 'row',
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
    background:"#0D3EF4",
    width: "100%",
    height :"100%"
};
const boton ={
    bottom:"-53px",
    background:"#F7F7F7",
    marginLeft: "1px",
    width: "200px",
    height :"170px",
    left : -60,
    display:"inline",
    boxshadow: "0 3px #999",
    outline: "none",
    borderradius: "50px"
    
};
const svg ={
    marginLeft:"50px",
    marginTop:"50px",
    marginRight:"50px",
    marginBottom:"50px"
    
};
const svg2 ={
    marginLeft:"50px",
    marginTop:"50px",
    marginRight:"50px",
    marginBottom:"50px"
    
};


const boton1={
    marginTop:"1px",
    marginLeft:"10px",
    marginRight:"15px",
    boxshadow: "0 10px #999",
    left:"10px",
    top:"-150px",
    background:"#F7F7F7",
    width: "200px",
    height :"170px",
    left : -22,
    outline: "none",
    borderradius: "50px"
}
const boton2={
    
    top:"-352px",
    marginLeft:"450px",
    background:"#F7F7F7",
    width: "200px",
    height :"170px",
    left : -20,
    borderradius: "50px"
}
const boton3={
    background:"#F7F7F7",
    width: "200px",
    height :"170px",
    left : -20
}
const boton4={
    top:"-352px",
    marginLeft: "-353px",
    background:"#81d8d0",
    width: "200px",
    height :"170px",
    background:"#F7F7F7",
}
const boton5={
    background:"#F7F7F7",
    top:"-555px",
    marginLeft: "-49px",
    width: "200px",
    height :"170px",
    flex:" 0 0 35px"
}
const boton6={
    flex:" 0 0 40px",
    marginLeft: "450px",
    top:"-757px",
    height: "40px", 
    width: "200px",
    height :"170px",
    background:"#F7F7F7",
    
    left : -20
}
const texto={
   
    fontweight: "bold",
    color: "#2E2B2A",
    fontFamily: "cursive",
    marginTop: "10px",
    marginBottom:"10px"

}
const carta={   
    
}
const contenedor={
    flex: 20,
    width: "150%",
    padding: 6
}
const flag = false;
const fondo={ 
    backgroundColor: '#EC8F7B ',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
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
        <React.Fragment >
            <CssBaseline />
            <AppBar position="relative" color='primary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        Lista de servicios Escuela Colombiana de Ingeniería Julio Garavito.
                    </Typography>
                </Toolbar>
                <Button variant="contained" style={boton0} color="secondary" onClick={handleLog}  >
                    Desconectarse
                </Button>
            </AppBar>
            <main style={fondo}> 

                    <Container maxWidth="sm" style={contenedor}>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={1.5} style={carta} widht="200px">

                                <Grid item>
                                    <Button variant="contained" style={boton} color="secondary" onClick={handleClick}>
                                       
                                        <div class ="content" height="200px" widht="170px">
                                        <span style={texto} >Noticias</span>
<svg id="Capa_1"  version="1.1" viewBox="0 0 200 200" width="140px" xmlns="http://www.w3.org/2000/svg" ><g><path d="M153.3,157h-3.9c-1.6,0-2.8-1.3-2.8-2.8s1.3-2.8,2.8-2.8h3.9c10.7,0,19.4-8.7,19.4-19.4V50.7H51.6v14.9   c0,1.6-1.3,2.8-2.8,2.8S46,67.1,46,65.6V47.8c0-1.6,1.3-2.8,2.8-2.8h126.9c1.6,0,2.8,1.3,2.8,2.8v84   C178.4,145.7,167.2,157,153.3,157z"/><path d="M151.3,157H47.4c-14.2,0-25.8-11.6-25.8-25.8V65.5c0-1.6,1.3-2.8,2.8-2.8h126.9c1.6,0,2.8,1.3,2.8,2.8v63.2   c0,8.3,4.5,15.9,11.8,19.8c1.4,0.7,1.9,2.5,1.1,3.8c-0.8,1.4-2.5,1.9-3.8,1.1c-9.1-5-14.8-14.5-14.8-24.8V68.4H27.3v62.8   c0,11.1,9,20.1,20.1,20.1h103.9c1.6,0,2.8,1.3,2.8,2.8S152.8,157,151.3,157z"/><path d="M112.1,78.6h-13c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h13.1c0.8,0,1.4,0.6,1.4,1.4S112.9,78.6,112.1,78.6z"/><path d="M139.4,78.6h-18.8c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4S140.2,78.6,139.4,78.6z"/><path d="M52.7,99.4H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4S53.5,99.4,52.7,99.4z"/><path d="M52.7,94.4H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4C54.1,93.8,53.5,94.4,52.7,94.4z"/><path d="M52.7,104.3H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4S53.5,104.3,52.7,104.3z"/><path d="M52.7,109.3H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4S53.5,109.3,52.7,109.3z"/><path d="M52.7,114.2H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4S53.5,114.2,52.7,114.2z"/><path d="M52.7,119.2H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h18.8c0.8,0,1.4,0.6,1.4,1.4C54.1,118.6,53.5,119.2,52.7,119.2z"/><path d="M85.9,81H35.6c-1.6,0-2.8-1.3-2.8-2.8s1.3-2.8,2.8-2.8h50.3c1.6,0,2.8,1.3,2.8,2.8S87.5,81,85.9,81z"/><path d="M139.4,89.5H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h105.5c0.8,0,1.4,0.6,1.4,1.4S140.2,89.5,139.4,89.5z"/><path d="M99.1,94.7H59.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h39.7c0.8,0,1.4,0.6,1.4,1.4C100.5,94,99.8,94.7,99.1,94.7z"/><path d="M99.1,99.6H59.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h39.7c0.8,0,1.4,0.6,1.4,1.4S99.8,99.6,99.1,99.6z"/><path d="M99.1,104.5H59.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h39.7c0.8,0,1.4,0.6,1.4,1.4S99.8,104.5,99.1,104.5z"/><path d="M99.1,109.4H59.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h39.7c0.8,0,1.4,0.6,1.4,1.4S99.8,109.4,99.1,109.4z"/><path d="M99.1,114.3H59.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h39.7c0.8,0,1.4,0.6,1.4,1.4C100.5,113.7,99.8,114.3,99.1,114.3z"/><path d="M99.1,119.2H59.4c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h39.7c0.8,0,1.4,0.6,1.4,1.4C100.5,118.6,99.8,119.2,99.1,119.2z"/><path d="M139.4,134.1h-35c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h35c0.8,0,1.4,0.6,1.4,1.4   C140.8,133.4,140.2,134.1,139.4,134.1z"/><path d="M139.4,139h-35c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h35c0.8,0,1.4,0.6,1.4,1.4C140.8,138.4,140.2,139,139.4,139z"/><path d="M139.4,144h-35c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h35c0.8,0,1.4,0.6,1.4,1.4S140.2,144,139.4,144z"/><path d="M139.4,148.9h-35c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h35c0.8,0,1.4,0.6,1.4,1.4S140.2,148.9,139.4,148.9z"/><path d="M164.6,71.1H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,71.1,164.6,71.1z"/><path d="M164.6,76.1H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,76.1,164.6,76.1z"/><path d="M164.6,81H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,81,164.6,81z"/><path d="M164.6,86H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,86,164.6,86z"/><path d="M164.6,91H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4C166,90.3,165.4,91,164.6,91z"/><path d="M164.6,95.9H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,95.9,164.6,95.9z"/><path d="M164.6,100.9H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,100.9,164.6,100.9z"/><path d="M164.6,105.8H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4C166,105.2,165.4,105.8,164.6,105.8z"/><path d="M164.6,110.8H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,110.8,164.6,110.8z"/><path d="M164.6,115.7H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,115.7,164.6,115.7z"/><path d="M164.6,120.7H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4C166,120,165.4,120.7,164.6,120.7z"/><path d="M164.6,125.6H153c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h11.6c0.8,0,1.4,0.6,1.4,1.4S165.4,125.6,164.6,125.6z"/><path d="M100.1,124.1H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h66.2c0.8,0,1.4,0.6,1.4,1.4S100.9,124.1,100.1,124.1z"/><path d="M64.2,129.1H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4C65.6,128.5,65,129.1,64.2,129.1z"/><path d="M100.1,129.1H69.8c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4   C101.5,128.5,100.9,129.1,100.1,129.1z"/><path d="M64.2,134.1H33.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4   C65.7,133.4,65,134.1,64.2,134.1z"/><path d="M100.1,134.1H69.8c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4   C101.5,133.4,100.9,134.1,100.1,134.1z"/><path d="M64.2,139H33.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4C65.7,138.4,65,139,64.2,139z"/><path d="M100.1,139H69.8c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4   C101.5,138.4,100.9,139,100.1,139z"/><path d="M64.2,144H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4S65,144,64.2,144z"/><path d="M100.1,144H69.8c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4S100.9,144,100.1,144z"/><path d="M64.2,148.9H33.9c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4S65,148.9,64.2,148.9z"/><path d="M100.1,148.9H69.8c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4h30.3c0.8,0,1.4,0.6,1.4,1.4S100.9,148.9,100.1,148.9z"/><path d="M139.4,128.3h-35c-0.8,0-1.4-0.6-1.4-1.4V93.2c0-0.8,0.6-1.4,1.4-1.4h35c0.8,0,1.4,0.6,1.4,1.4v33.7   C140.8,127.7,140.2,128.3,139.4,128.3z M105.9,125.5H138V94.7h-32.1V125.5z"/><path d="M68.5,58.2H56.3c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h12.3c0.8,0,1.4,0.6,1.4,1.4C70,57.5,69.3,58.2,68.5,58.2z"/><path d="M168.6,58.2H76.3c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h92.3c0.8,0,1.4,0.6,1.4,1.4   C170,57.5,169.4,58.2,168.6,58.2z"/><path d="M164.6,148.9c-0.8,0-1.4-0.6-1.4-1.4v-13.4h-11.6c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h13c0.8,0,1.4,0.6,1.4,1.4   v14.9C166,148.3,165.4,148.9,164.6,148.9z"/></g></svg>
</div>                                       
                                        
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
                                        <div class ="content" height="200px" widht="170px">
                                        <span style={texto} >Consultar Notas</span>
                                        <svg enable-background="new 0 0 128 128" id="Слой_1" version="1.1" viewBox="0 0 128 128" width="115px"  xmlns="http://www.w3.org/2000/svg" ><g><g><path d="M105.2,25.7v76.7c0,8.3-6.7,15-15,15H37.8c-8.3,0-15-6.7-15-15V25.7c0-8.3,6.7-15,15-15h52.4    C98.5,10.7,105.2,17.4,105.2,25.7z" fill="#FFFFFF"/></g><g><path d="M89.8,51.9H37.4c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2h52.4c0.7,0,1.2,0.6,1.2,1.2S90.5,51.9,89.8,51.9z    " fill="#502D4B"/></g><g><path d="M89.8,41.9H37.4c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2h52.4c0.7,0,1.2,0.6,1.2,1.2S90.5,41.9,89.8,41.9z    " fill="#502D4B"/></g><g><path d="M89.8,31.9H37.4c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2h52.4c0.7,0,1.2,0.6,1.2,1.2S90.5,31.9,89.8,31.9z    " fill="#502D4B"/></g><g><path d="M62.8,107.9c-2,0-3.9-1-5.1-2.6L45.1,87.6c-2-2.8-1.4-6.8,1.5-8.8c2.8-2,6.8-1.4,8.8,1.5l7.3,10.2    l15.1-22.7c1.9-2.9,5.8-3.7,8.7-1.7c2.9,1.9,3.7,5.8,1.7,8.7L68,105.1c-1.1,1.7-3.1,2.8-5.1,2.8C62.9,107.9,62.8,107.9,62.8,107.9    z" fill="#E074A3"/></g><g><path d="M62.8,109.2c-2.4,0-4.7-1.2-6.1-3.2L44,88.3c-1.2-1.6-1.6-3.6-1.3-5.6c0.3-2,1.4-3.7,3.1-4.9    c1.3-0.9,2.8-1.4,4.4-1.4c2.4,0,4.7,1.2,6.2,3.2l6.2,8.7l14.1-21.1c1.4-2.1,3.8-3.4,6.3-3.4c1.5,0,2.9,0.4,4.2,1.3    c1.7,1.1,2.8,2.8,3.2,4.8c0.4,2,0,4-1.1,5.7l-20.2,30.3c-1.4,2.1-3.7,3.3-6.2,3.4L62.8,109.2z M50.2,78.9c-1.1,0-2.1,0.3-2.9,0.9    c-1.1,0.8-1.8,1.9-2,3.3c-0.2,1.3,0.1,2.7,0.9,3.8l12.6,17.6c0.9,1.3,2.5,2.1,4.1,2.1l0.1,0c1.7,0,3.2-0.9,4.1-2.2l20.2-30.3    c0.7-1.1,1-2.5,0.8-3.8s-1-2.5-2.2-3.2c-0.8-0.6-1.8-0.8-2.8-0.8c-1.7,0-3.3,0.8-4.2,2.2L63.7,91.2c-0.2,0.3-0.6,0.5-1,0.6    c-0.4,0-0.8-0.2-1-0.5L54.3,81C53.3,79.7,51.8,78.9,50.2,78.9z" fill="#502D4B"/></g><g><path d="M90.2,118.6H37.8c-9,0-16.2-7.3-16.2-16.2V25.7c0-9,7.3-16.2,16.2-16.2h52.4c9,0,16.2,7.3,16.2,16.2v76.7    C106.5,111.3,99.2,118.6,90.2,118.6z M37.8,11.9c-7.6,0-13.8,6.2-13.8,13.8v76.7c0,7.6,6.2,13.8,13.8,13.8h52.4    c7.6,0,13.8-6.2,13.8-13.8V25.7c0-7.6-6.2-13.8-13.8-13.8H37.8z" fill="#502D4B"/></g></g></svg>                                        </div>         
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
                                    <div class ="content" height="200px" widht="170px">
                                        <span style={texto} >Lista Electivas</span>
                                        <svg enable-background="new 0 0 512 512" height="140px" id="Crane" version="1.1" viewBox="0 0 512 512" width="115px"  xmlns="http://www.w3.org/2000/svg"><g id="Crane_1_"><g><path d="M449.738,411.413c-9.809,0-17.787,7.979-17.787,17.787s7.979,17.787,17.787,17.787c9.807,0,17.787-7.979,17.787-17.787    S459.545,411.413,449.738,411.413z M449.738,434.987c-3.191,0-5.787-2.596-5.787-5.787s2.596-5.787,5.787-5.787    c3.19,0,5.787,2.596,5.787,5.787S452.929,434.987,449.738,434.987z"/><path d="M221.702,411.413c-9.809,0-17.788,7.979-17.788,17.787s7.979,17.787,17.788,17.787c9.808,0,17.787-7.979,17.787-17.787    S231.51,411.413,221.702,411.413z M221.702,434.987c-3.191,0-5.788-2.596-5.788-5.787s2.597-5.787,5.788-5.787    s5.787,2.596,5.787,5.787S224.894,434.987,221.702,434.987z"/><path d="M449.738,389.479h-60.113v-12.69h35.918h12h18.195V274.104l-18.195-13.969v-137.61h-9.211V84.057h-36.51v38.468h-82.23    l-46.759,78.251L115.357,58.75c-1.347-3.275-3.386-6.26-6.056-8.777c-5.054-4.763-11.917-7.254-18.838-6.853    c-0.738,0.044-1.49,0.156-2.308,0.346L39.674,54.793c-6.351,1.484-10.785,7.074-10.785,13.596v57.381h12V82.268l5.872,1.372    v64.857H28.082v67.488h12.271v6.86c-10.236,2.666-17.813,11.988-17.813,23.047c0,13.131,10.684,23.813,23.813,23.813    s23.813-10.683,23.813-23.812h-12c0,6.514-5.299,11.813-11.813,11.813c-6.515,0-11.813-5.299-11.813-11.813    c0-6.515,5.299-11.813,11.813-11.813h6v-18.096h12.271v-67.488h-5.864V86.443l29.402,6.869c0.811,0.188,1.563,0.301,2.297,0.344    c0.49,0.029,0.981,0.044,1.471,0.044c0.11,0,0.221-0.007,0.332-0.008l142.352,158.266v71.268h-25.409v53.563h25.409h12h35.918    v12.69H221.7c-21.903,0-39.722,17.819-39.722,39.722s17.818,39.722,39.722,39.722h228.038c21.902,0,39.721-17.819,39.721-39.722    S471.641,389.479,449.738,389.479z M437.543,275.264l6.195,4.756v84.769h-6.195V275.264z M234.614,364.788h-13.409v-29.563h13.409    V364.788z M403.822,96.057h12.51v8.52h-12.51V96.057z M403.822,116.576h12.51v5.948h-12.51V116.576z M52.625,203.985H40.082    v-43.488h12.543V203.985z M91.164,81.677c-0.003,0-0.085-0.006-0.277-0.051L42.404,70.299c-0.894-0.208-1.516-0.994-1.516-1.91    s0.622-1.702,1.516-1.91L90.88,55.152c0.199-0.046,0.281-0.052,0.288-0.053c0.27-0.016,0.539-0.023,0.807-0.023    c3.392,0,6.596,1.271,9.096,3.628c2.694,2.54,4.179,5.979,4.179,9.685s-1.484,7.144-4.179,9.684    C98.372,80.614,94.859,81.902,91.164,81.677z M239.574,239.528L105.085,90.004c1.504-0.912,2.921-1.979,4.216-3.199    c3.188-3.006,5.485-6.674,6.766-10.712l140.122,134.943L239.574,239.528z M246.614,364.788v-7.734h32.144v-12h-32.144v-21.828    v-71.913L316.4,134.524h75.422h33.721v116.397v94.132H293.848v12h131.695v7.734h-35.918H282.532H246.614z M377.625,376.788v12.69    h-83.093v-12.69H377.625z M221.7,456.922c-15.286,0-27.722-12.436-27.722-27.722s12.436-27.722,27.722-27.722    s27.722,12.436,27.722,27.722S236.986,456.922,221.7,456.922z M250.11,456.922c1.84-1.885,3.491-3.952,4.931-6.171h161.355    c1.439,2.219,3.091,4.286,4.931,6.171H250.11z M268.196,438.751h-7.942c0.758-3.062,1.168-6.259,1.168-9.551    c0-3.478-0.453-6.852-1.297-10.068h8.071c-1.493,2.951-2.34,6.282-2.34,9.81S266.703,435.8,268.196,438.751z M277.856,428.941    c0-5.409,4.4-9.81,9.81-9.81c5.408,0,9.809,4.4,9.809,9.81s-4.4,9.81-9.809,9.81C282.257,438.751,277.856,434.351,277.856,428.941    z M307.135,419.132h9.115c-1.494,2.951-2.34,6.282-2.34,9.81s0.846,6.858,2.34,9.81h-9.115c1.493-2.951,2.34-6.282,2.34-9.81    S308.628,422.083,307.135,419.132z M325.91,428.941c0-5.409,4.4-9.81,9.809-9.81c5.409,0,9.81,4.4,9.81,9.81s-4.4,9.81-9.81,9.81    C330.311,438.751,325.91,434.351,325.91,428.941z M355.188,419.132h8.49c-1.493,2.951-2.34,6.282-2.34,9.81s0.847,6.858,2.34,9.81    h-8.49c1.494-2.951,2.341-6.282,2.341-9.81S356.682,422.083,355.188,419.132z M373.338,428.941c0-5.409,4.4-9.81,9.81-9.81    s9.81,4.4,9.81,9.81s-4.4,9.81-9.81,9.81S373.338,434.351,373.338,428.941z M402.617,419.132h8.695    c-0.844,3.217-1.297,6.591-1.297,10.068c0,3.292,0.41,6.489,1.168,9.551h-8.566c1.492-2.951,2.34-6.282,2.34-9.81    S404.109,422.083,402.617,419.132z M416.729,407.132h-162.02c-1.358-2.025-2.901-3.914-4.599-5.653h32.422h107.093h31.702    C419.63,403.218,418.088,405.106,416.729,407.132z M449.738,456.922c-15.286,0-27.723-12.436-27.723-27.722    s12.437-27.722,27.723-27.722c15.285,0,27.721,12.436,27.721,27.722S465.023,456.922,449.738,456.922z"/><path d="M358.953,296.724h48.537v-33.673h-48.537V296.724z M370.953,275.051h24.537v9.673h-24.537V275.051z"/><path d="M407.49,144.194h-82.738l-65.788,111.487H407.49V144.194z M348.045,243.682h-68.066l51.627-87.487h16.439V243.682z     M395.49,243.682h-35.445v-87.487h35.445V243.682z"/></g></g></svg>
                                        </div>
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
                                    <div class ="content" height="200px" widht="170px">
                                        <span style={texto} >Certificado Estudio</span>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="150px" height="120px" viewBox="0 0 459 459">
<g>
	<g>
		<rect x="286.875" y="239.062" width="114.75" height="19.125"/>
		<rect x="229.5" y="181.688" width="172.125" height="19.125"/>
		<path d="M420.75,28.688H38.25C17.212,28.688,0,45.9,0,66.938v248.625c0,21.037,17.212,38.25,38.25,38.25H76.5v76.5l47.812-47.812
			l47.812,47.812v-76.5H420.75c21.037,0,38.25-17.213,38.25-38.25V66.938C459,45.9,441.787,28.688,420.75,28.688z M153,384.412
			l-28.688-28.688l-28.688,28.688v-74.587c9.562,3.825,19.125,5.737,28.688,5.737s19.125-1.912,28.688-5.737V384.412z
			 M124.312,296.438c-26.775,0-47.812-21.037-47.812-47.812s21.038-47.812,47.812-47.812s47.812,21.037,47.812,47.812
			S151.087,296.438,124.312,296.438z M439.875,315.562c0,11.475-7.65,19.125-19.125,19.125H172.125v-40.162
			c11.475-11.476,19.125-28.688,19.125-45.9c0-36.337-30.6-66.938-66.938-66.938s-66.938,30.6-66.938,66.938
			c0,19.125,7.65,34.425,19.125,45.9v40.162H38.25c-11.475,0-19.125-9.562-19.125-19.125V66.938c0-11.475,7.65-19.125,19.125-19.125
			h382.5c11.475,0,19.125,9.562,19.125,19.125V315.562z"/>
		<rect x="57.375" y="124.312" width="344.25" height="19.125"/>
	</g>
</g>

</svg>

                                        </div>
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
                                    <div class ="content" height="200px" widht="170px">
                                        <span style={texto} >Calendario Academico</span>
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="160px" height="90px" viewBox="0 0 652.801 652.801" 
	 >
<g>
	<g id="_x35__16_">
		<g>
			<path d="M142.8,408h40.8c22.542,0,40.8-18.279,40.8-40.801V326.4c0-22.542-18.258-40.8-40.8-40.8h-40.8
				c-22.542,0-40.8,18.258-40.8,40.8v40.799C102,389.721,120.258,408,142.8,408z M142.8,326.4h40.8v40.799h-40.8V326.4z
				 M469.2,571.199H510c22.542,0,40.801-18.258,40.801-40.799V489.6c0-22.541-18.259-40.799-40.801-40.799h-40.8
				c-22.521,0-40.8,18.258-40.8,40.799V530.4C428.4,552.941,446.658,571.199,469.2,571.199z M469.2,489.6H510V530.4h-40.8V489.6z
				 M469.2,408H510c22.542,0,40.801-18.279,40.801-40.801V326.4c0-22.542-18.259-40.8-40.801-40.8h-40.8
				c-22.521,0-40.8,18.258-40.8,40.8v40.799C428.4,389.721,446.658,408,469.2,408z M469.2,326.4H510v40.799h-40.8V326.4z
				 M550.801,40.8H469.2V20.4c0-11.261-9.139-20.4-20.399-20.4s-20.4,9.139-20.4,20.4v20.4h-204V20.4C224.4,9.139,215.261,0,204,0
				s-20.4,9.139-20.4,20.4v20.4H102c-45.063,0-81.6,36.537-81.6,81.6v448.799c0,45.064,36.537,81.602,81.6,81.602h448.8
				c45.063,0,81.6-36.537,81.6-81.602V122.4C632.4,77.336,595.864,40.8,550.801,40.8z M591.601,571.199
				c0,22.543-18.258,40.801-40.8,40.801H102c-22.542,0-40.8-18.279-40.8-40.801V204h530.4V571.199z M591.601,163.2H61.2v-40.8
				c0-22.542,18.258-40.8,40.8-40.8h81.6V102c0,11.261,9.139,20.4,20.4,20.4s20.4-9.139,20.4-20.4V81.6h204V102
				c0,11.261,9.14,20.4,20.4,20.4S469.2,113.261,469.2,102V81.6h81.601c22.542,0,40.8,18.258,40.8,40.8V163.2z M306,571.199h40.8
				c22.542,0,40.8-18.258,40.8-40.799V489.6c0-22.541-18.258-40.799-40.8-40.799H306c-22.521,0-40.8,18.258-40.8,40.799V530.4
				C265.2,552.941,283.458,571.199,306,571.199z M306,489.6h40.8V530.4H306V489.6z M306,408h40.8c22.542,0,40.8-18.279,40.8-40.801
				V326.4c0-22.542-18.258-40.8-40.8-40.8H306c-22.521,0-40.8,18.258-40.8,40.8v40.799C265.2,389.721,283.458,408,306,408z
				 M306,326.4h40.8v40.799H306V326.4z M142.8,571.199h40.8c22.542,0,40.8-18.258,40.8-40.799V489.6
				c0-22.541-18.258-40.799-40.8-40.799h-40.8c-22.542,0-40.8,18.258-40.8,40.799V530.4C102,552.941,120.258,571.199,142.8,571.199z
				 M142.8,489.6h40.8V530.4h-40.8V489.6z"/>
		</g>
	</g>
</g>
</svg>

                                        </div>
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
                                    <div class ="content" height="200px" widht="170px">
                                        <span style={texto} >Consultar Horario</span>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.64 8.64"  enable-background="new 0 0 8.64 8.64" width="110px" height="90px">
  <g>
    <g>
      <path d="m5.76,4.091h-1.2v-2.4c0-0.132-0.107-0.24-0.24-0.24-0.133,0-0.24,0.107-0.24,0.24v2.64c0,0.133 0.107,0.24 0.24,0.24h1.44c0.133,0.001 0.24-0.107 0.24-0.239s-0.107-0.241-0.24-0.241zm-3.607-3.592v-1.11022e-16c0.001,0.002 0.003,0.003 0.004,0.004l-.004-.004zm-1.324,1.328c-0.209-0.126-0.35-0.353-0.35-0.616 0-0.397 0.321-0.72 0.717-0.72 0.262,0 0.488,0.142 0.614,0.352l.343-.344c-0.218-0.294-0.564-0.487-0.957-0.487-0.66-1.04083e-17-1.196,0.537-1.196,1.199 0,0.395 0.192,0.742 0.485,0.96l.344-.344zm6.615-1.815c-0.396-1.04083e-17-0.744,0.195-0.961,0.492l.004-.004 .343,.344c0.125-0.21 0.352-0.352 0.614-0.352 0.396,0 0.717,0.322 0.717,0.72 0,0.263-0.141,0.49-0.351,0.616l.344,.345c0.294-0.22 0.486-0.567 0.486-0.962 0-0.662-0.536-1.199-1.196-1.199zm-3.124,.48c-2.121,0-3.84,1.719-3.84,3.84 0,1.18 0.533,2.234 1.371,2.938l-.965,.965c-0.09,0.09-0.09,0.236 0,0.326 0.09,0.09 0.236,0.09 0.326,0l.977-.977c0.012-0.013 0.018-0.027 0.027-0.041 0.605,0.396 1.327,0.628 2.104,0.628 0.764,0 1.473-0.225 2.071-0.609 0.005,0.007 0.008,0.015 0.014,0.021l.978,.977c0.09,0.09 0.236,0.09 0.326,0 0.09-0.09 0.09-0.236 0-0.326l-.943-.942c0.851-0.705 1.394-1.769 1.394-2.96 0-2.122-1.719-3.84-3.84-3.84zm0,7.2c-1.856,0-3.36-1.505-3.36-3.36 0-1.856 1.504-3.36 3.36-3.36 1.855,0 3.36,1.504 3.36,3.36 0,1.855-1.504,3.36-3.36,3.36z"/>
    </g>
  </g>
</svg>

                                        </div>
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
