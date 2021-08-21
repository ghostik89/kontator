import React from "react"
import {Avatar, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Typography} from "@material-ui/core";
import NavBar from "../../components/ResidentPages/NavBar";
import List from "@material-ui/core/List";
import {AccountBox, CardTravel, CheckCircle, Home} from "@material-ui/icons";

export const ResidentMainPage = () => {
    return(
        <>
            <Avatar/>
            <NavBar>
                <>
                    <Grid container spacing={10}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar
                                        variant={"square"}
                                        sx={{width: 250, height: 250, borderRadius: 5}}
                                        src={"https://picsum.photos/250"}
                                    />
                                </Grid>
                                <Grid item>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <CardTravel/>
                                            </ListItemAvatar>
                                            <ListItemText primary={"Название организации"} secondary={"ООО “FaceSafe lab.”"}/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Home/>
                                            </ListItemAvatar>
                                            <ListItemText primary={"Вид резидентства"} secondary={"Постоянный"}/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <AccountBox/>
                                            </ListItemAvatar>
                                            <ListItemText primary={"Руководитель"} secondary={"Иванов Иван Иванович"}/>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Paper elevation={3} sx={{minWidth: 500, minHeight:100, padding: 2, mb:2}}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <CheckCircle/>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"h6"}>Ваш платеж принят</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Typography variant={"body2"}>Действие: оплата ЖКХ</Typography>
                            </Paper>
                            <Paper elevation={3} sx={{minWidth: 500, minHeight:100, padding: 2}}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <CheckCircle/>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={"h6"}>Ваш платеж принят</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Typography variant={"body2"}>Действие: оплата ЖКХ</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            </NavBar>
        </>
    )
}