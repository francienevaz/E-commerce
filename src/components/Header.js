import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import {useStyles} from '../Pages/home';

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}className={classes.grid}>
            <Typography variant='h3'>
                LoLja Geek
            </Typography>
            <Link to="/">
                <Button color="primary">Início</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;