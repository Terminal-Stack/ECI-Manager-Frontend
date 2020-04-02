import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CargaDatos from '../CargaDatos';
import axios from 'axios';
import AuthenticationService from "../_services/AuthenticationService";
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(subject, firstTerm, secondTerm, thirdTerm, total) {

  console.log('entre');
  return { subject, firstTerm, secondTerm, thirdTerm, total };
}

const rows = [
  createData('ARSW', 45, 25, 32, 34),
  createData('SPTI', 31, 32, 35, 32),
  createData('ENG4', 45, 42, 47, 45),
  createData('AREP', 35, 40, 41, 39),
  createData('HCOL', 46, 45, 35, 41)
]
const state=null;

export default function SemesterGrades() {
  
  const classes = useStyles();
  function handleLog(e) {
    e.preventDefault();
    window.location.replace("/login");
  }
  function handleVolver(e) {
    e.preventDefault();
    window.location.replace("/consultaNotas");
  }
  function verdata(e) {
    axios.get(`http://ec2-54-89-178-141.compute-1.amazonaws.com/grades/` + 2131406,
      {
        headers: {
          authorization: AuthenticationService.createBasicAuthToken(
            'daniel.vela@mail.escuelaing.edu.co', 'password')
        }
      }).then(res => {
        res =  res.data._embedded.grades;
        console.log(res);
        
      })
      ;
      
  }
  async function hey(e) {
    var x = await
    axios.get(`http://ec2-54-89-178-141.compute-1.amazonaws.com/grades/` + 2131406,
      {
        headers: {
          authorization: AuthenticationService.createBasicAuthToken(
            'daniel.vela@mail.escuelaing.edu.co', 'password')
        }
      });
      console.log(x);
  }
  return (
    <TableContainer component={Paper}>
      <AppBar position="relative" color='secondary'>
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
            Notas academicas
                    </Typography>
        </Toolbar>
        <Button variant="contained" color="secondary" onClick={handleLog}  >
          Desconectarse
                </Button>
        <Button variant="contained" color="secondary" onClick={handleVolver}  >
          volver
                </Button>
        <Button variant="contained" color="secondary" onClick={verdata}  >
          verdata
                </Button>
        <Button variant="contained" color="secondary" onClick={hey}  >
          hey
                </Button>

      </AppBar>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="right">First term</TableCell>
            <TableCell align="right">Second Term</TableCell>
            <TableCell align="right">Third Term</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.subject}>
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="right">{row.firstTerm}</TableCell>
              <TableCell align="right">{row.secondTerm}</TableCell>
              <TableCell align="right">{row.thirdTerm}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>

  );
}