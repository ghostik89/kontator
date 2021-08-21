import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import whiteLogo from '../../img/logo-white.png'
import {useHistory} from "react-router-dom";
import {routes} from "../../helpers/routes";

export default function Header() {
    const history = useHistory()

    const toLogin = () => {
        history.push(routes.login)
    }

    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <img src={whiteLogo} alt={'logo'}/>
                    <Button color="inherit" onClick={toLogin}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
