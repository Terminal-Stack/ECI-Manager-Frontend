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
        backgroundColor: "#89D0FF",
        padding: theme.spacing(8, 0, 6),
        overflow:'auto'
       
  
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
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9    
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        padding: theme.spacing(6),           
        
        
    },
}));
const estilo={ 
    backgroundColor: '#89D0FF  ',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    
    
    
  };


const cards = [1,2,3,4,5,6,7,8,9];

export default function Album() {
    const classes = useStyles();

    const [newsF, setNewsF] = useState([]);

    useEffect(() => {
        NewsDataService.retrieveAllNews().then(response => {
            console.log("news " + JSON.stringify(response));
            setNewsF(response.data._embedded.news);
        })
            .catch(error => console.log("Error retrieving news " + error));
        
    });

        return (
            
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative" color='secondary' >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Sección Noticias
                    </Typography>
                </Toolbar>
                <Button variant="contained" color="primary" onClick={handleVolver}>
                    volver
                </Button>
            </AppBar>
            
            
            <main className={classes.center} >
                {/* Hero unit */}
                <div className={classes.heroContent}  >
                <Container className={classes.cardGrid} maxWidth="md" style={estilo} >
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
