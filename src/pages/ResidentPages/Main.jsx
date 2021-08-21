import React from "react"
import {Avatar, Grid, ListItem, ListItemAvatar, ListItemText, Paper} from "@material-ui/core";
import NavBar from "../../components/ResidentPages/NavBar";
import List from "@material-ui/core/List";
import {AccountBox, CardTravel, Home} from "@material-ui/icons";

export const ResidentMainPage = () => {
    return(
        <>
            <Avatar/>
            <NavBar>
                <>
                    <Grid container spacing={2}>
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
                            <Paper>
                                Уведомление
                            </Paper>
                        </Grid>
                    </Grid>
                </>
            </NavBar>
        </>
    )
}