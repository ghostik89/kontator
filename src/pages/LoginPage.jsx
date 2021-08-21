import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import logo from '../img/logo.svg'
import {Copyright} from "../components/Copyright";
import {useHistory} from "react-router-dom";
import {routes} from "../helpers/routes";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {TextField} from "@material-ui/core";
import {authorize} from "../store/user";

export default function LoginPage() {
    const history = useHistory()
    const {handleSubmit, register} = useForm()
    const dispatch = useDispatch()

    const onSubmit = handleSubmit((data) => {
        dispatch(authorize(data))
        history.push(routes.mainResident)
    })

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt={'logo'}/>
                <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        {...register('email', {required: false})}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        {...register('password', {required: false})}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Войти как резидент
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => history.push(routes.mainAdmin)}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Войти как УК
                    </Button>
                    <Grid container>
                        {/*<Grid item>*/}
                        {/*    <Link href="#" variant="body2">*/}
                        {/*        {"Don't have an account? Sign Up"}*/}
                        {/*    </Link>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}