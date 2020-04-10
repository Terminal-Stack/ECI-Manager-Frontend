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
  createData('700-730'),
  createData('730-800'),
  createData('800-830'),
  createData('830-900'),
  createData('900-930'),
  createData('930-10'),
  createData('1000-1030'),
  createData('1030-1100'),
  createData('1100-1130'),
  createData('1130-1200'),
  createData('1200-1230'),
  createData('1230-1000'),
  createData('1000-1300'),
  createData('1300-1330'),
  createData('1330-1400'),
  createData('1400-1430'),
  createData('1430-1500'),
  createData('1500-1530'),
  createData('1530-1600'),
  createData('1600-1630'),
  createData('1630-1700')
]

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
            <TableCell>times</TableCell>
            <TableCell align="right">Lunes</TableCell>
            <TableCell align="right">Martes</TableCell>
            <TableCell align="right">Miercoles</TableCell>
            <TableCell align="right">Jueves</TableCell>
            <TableCell align="right">Viernes</TableCell>
            <TableCell align="right">Sabado</TableCell>
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