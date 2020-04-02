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
    window.location.replace("/listaServicios");
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
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {

        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const news = CargaDatos.getAllNews();
const cards = [1,2,3,4,5,6,7,8,9];

export default function Album() {

    function handleVolver(e) {
        e.preventDefault();
        window.location.replace("/listaServicios");
    }

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
        <React.Fragment>
            <AppBar position="relative" color='secondary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        Sección Noticias
                    </Typography>
                </Toolbar>
                <Button variant="contained" color="secondary" onClick={handleLog}  >
                    Desconectarse
                </Button>
                <Button variant="contained" color="secondary" onClick={handleVolver}  >
                    volver
                </Button>
            </AppBar>
            <CssBaseline />

                <main className={classes.center}>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Noticias

                            </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Aquí encontrará las noticias que son de interes para la comunidad.
                            </Typography>

                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                            </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
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
                </main>

                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer

                    </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                    </Typography>
                <Copyright />
            </footer>
            {/* End footer */}


        </React.Fragment>
    );
}