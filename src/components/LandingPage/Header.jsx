import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {routes} from "../../helpers/routes";
import {useHistory} from "react-router-dom";

export default function Header() {
    const history = useHistory()

    const goToLogin = () => {
        history.push(routes.login)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={"inherit"} sx={{boxShadow: 'none'}}>
                <Toolbar>
                    <Button
                        sx={{ ml: '95%' }}
                        onClick={goToLogin}
                        color={"primary"}
                    >
                        Войти
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
