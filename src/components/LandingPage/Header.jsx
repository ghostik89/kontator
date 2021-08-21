import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import whiteLogo from '../../img/logo-white.svg'
import {routes} from "../../helpers/routes";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <img src={whiteLogo} alt={'logo'}/>
                    <Button color="inherit"><Link to={routes.login}>Login</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
