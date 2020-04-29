import React, { useState, useEffect } from 'react';
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
import GradesDataService from "../_services/GradesDataService";
import AuthenticationService from "../_services/AuthenticationService";

const API_URL = 'http://ec2-54-89-178-141.compute-1.amazonaws.com';

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
  return { subject, firstTerm, secondTerm, thirdTerm, total };
}

const rows = [
  createData('ARSW', 45, 25, 32, 34),
  createData('SPTI', 31, 32, 35, 32),
  createData('ENG4', 45, 42, 47, 45),
  createData('AREP', 35, 40, 41, 39),
  createData('HCOL', 46, 45, 35, 41)
]

export default function SemesterGrades() {
  const [newsF, setNewsF] = useState([]);
  const classes = useStyles();
  function handleLog(e) {
    e.preventDefault();
    window.location.replace("/login");
  }
  function handleVolver(e) {
    e.preventDefault();
    window.location.replace("/consultaNotas");
  }
  useEffect(() => {
    //AuthenticationService.
    GradesDataService.retrieveAllGrades(2131406).then(response => {
      //console.log("grades " + JSON.stringify(response)); 
      setNewsF(response.data._embedded.grades);
      console.log(newsF);
    })
      .catch(error => console.log("Error retrieving grades " + error));
  });
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
      </AppBar>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="right">semester</TableCell>
            <TableCell align="right">Term</TableCell>
            <TableCell align="right">grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newsF.map(row => (
            <TableRow key={row.subject}>
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="right">{row.semester}</TableCell>
              <TableCell align="right">{row.term}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}