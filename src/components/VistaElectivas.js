import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#FB340A",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Inteligencia de negocios', 'INNE', 4, 'Descripcion'),
    createData('Creatividad e Innovacion', 'CRTI', 3, 'Descripcion'),
    createData('Mineria de datos ', 'MIND', 3, 'Descripcion')
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    function handleLog(e) {
        e.preventDefault();
        window.location.replace("/login");
    }
    function handleVolver(e) {
        e.preventDefault();
        window.location.replace("/listaServicios");
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
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Nombre&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Sigla&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Creditos&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Descripcion</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}