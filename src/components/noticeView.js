import React, {useState, useEffect} from 'react';
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
import Scrollbar from "react-scrollbars-custom";
import PerfectScrollbar from 'react-perfect-scrollbar'
import CargaDatos from '../CargaDatos';
import axios from "axios";
import AuthenticationService from "../_services/AuthenticationService";
import NewsDataService from '../_services/NewsDataService';
const API_URL = 'http://ec2-54-89-178-141.compute-1.amazonaws.com';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.escuelaing.edu.co/es/">
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
        padding: theme.spacing(2, 0, 1),
        overflow: 'auto',
  
    },
    heroButtons: {
        marginTop: theme.spacing(4),
        
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        marginBottom :'10px', 
        
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
        flexGrow: 2,
    },
    footer: {
        paddingTop: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        
    },
}));



const cards = [1,2,3,4,5,6,7,8,9];

export default function Album() {

    const [newsF, setNewsF] = useState([]);

    function handleVolver(e) {
        e.preventDefault();
        window.location.replace("/");
    }

    const classes = useStyles();


    function handleLog(e) {
        e.preventDefault();
        window.location.replace("/login");
    }

    useEffect(() => {
        NewsDataService.retrieveAllNews().then(response => {
            console.log("news " + JSON.stringify(response));
            setNewsF(response.data._embedded.news);
        })
            .catch(error => console.log("Error retrieving news " + error));
        //alert(news.data._embedded.news)
    });



    return (
        <React.Fragment>
            <AppBar position="relative" color='secondary'>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Sección Noticias
                    </Typography>
                </Toolbar>
                <Button variant="contained" color="secondary" onClick={handleLog}>
                    Desconectarse
                </Button>
                <Button variant="contained" color="secondary" onClick={handleVolver}>
                    volver
                </Button>
            </AppBar>
            <CssBaseline/>

            <main className={classes.center} >
                {/* Hero unit */}
                <div className={classes.heroContent} >
                    
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Noticias

                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Aquí encontrará las noticias que son de interes para la comunidad.
                        </Typography>

                    </Container>
                
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {newsF.map(card => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.picture}
                                        title={card.title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    
                </Container>
                </div>
            </main>

            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer

                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Sección de noticias Escuela Colombiana de Ingenieria Julio Garavito
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}


        </React.Fragment>
    );
}