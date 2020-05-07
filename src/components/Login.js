import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import AuthenticationService from '../_services/AuthenticationService';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});
const modal=false;
class Login extends React.Component {
    constructor(props) {
        super(props);
        AuthenticationService.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value} = e.target;
        this.setState({[name]: value });
    }
    handleModal(e){
        if (modal) {
            alert('contraseña invalida');
            modal=false;
        }
    }
    handleSubmit(e) {
                    e.preventDefault();
        this.setState({ submitted: true });
        const { email, password, returnUrl} = this.state;

        // stop here if form is invalid
        if (!(email && password)) {
            alert('contraseña invalida');
            return;
        }

        AuthenticationService.executeAuthenticationService(email, password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLogin(this.state.email, response.data.token);
                    this.props.history.push('/');
                },
               
                error => this.setState({ error, loading: false,modal:true,}, alert('contraseña invalida') )
            );
    }
    
    render() {
        const { email, password, submitted, loading, error} = this.state;
        const { classes} = this.props;
        return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                        </Button>
                            <Grid container>
                              <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        );
    }
}

Login.propTypes = {
                    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);