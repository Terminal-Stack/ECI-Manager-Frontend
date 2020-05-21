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

function createData(subject, lunes, martes, miercoles, jueves,viernes) {
  return { subject, lunes, martes, miercoles, jueves,viernes };
}

const rows = [
  createData('700-730' , 'ARSW','','ALLI','',''),
  createData('730-800', 'ARSW','','ALLI','',''),
  createData('800-830','ARSW ',' ','ALLI','',''),
  createData('830-900',''  ,'TPRO','ALLI','',''), 
  createData('900-930','','TPRO','ALLI','',''), 
  createData('930-10','','TPRO','ALLI','',''),
  createData('1000-1030','MMIN',' ','PIMB','','ARSW'),
  createData('1030-1100','MMIN','','PIMB','','ARSW'),
  createData('1100-1130','MMIN','','PIMB','','ARSW'),
  createData('1130-1200','MMIN','IETI','','','ARSW'),
  createData('1200-1230','MMIN','IETI','','','ARSW'),
  createData('1230-1000','MMIN','IETI','','','ARSW'),
  createData('1000-1300','','IETI','','','CALD'),
  createData('1300-1330','','IETI','','','CALD'),
  createData('1330-1400','','IETI','','','CALD'),
  createData('1400-1430','','IETI','','','CALD'),
  createData('1430-1500','','CALD','','',''),
  createData('1500-1530','','CALD'),
  createData('1530-1600','','CALD'),
  createData('1600-1630','','','','',''),
  createData('1630-1700','','','','',''),
  createData('1700-1730','','','','',''),
  createData('1730-1800','','','','',''),
  createData('1800-1830','','','','',''),
  createData('1830-1900','','','','',''),
  
]


export default function SemesterGrades() {
  const classes = useStyles();
  function handleLog(e) {
    e.preventDefault();
    window.location.replace("/login");
  }
  function handleVolver(e) {
    e.preventDefault();
    window.location.replace("/");
  }
  return (
    <TableContainer component={Paper}>
      <AppBar position="relative" color='secondary'>
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
            Horario Academico
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
               <TableCell align="right">{row.lunes}</TableCell>
              <TableCell align="right">{row.martes}</TableCell>
              <TableCell align="right">{row.miercoles}</TableCell>
              <TableCell align="right">{row.jueves}</TableCell>
              <TableCell align="right">{row.viernes}</TableCell>
              <TableCell align="right">{row.sabado}</TableCell>
              <TableCell align="right">{row.domingo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}