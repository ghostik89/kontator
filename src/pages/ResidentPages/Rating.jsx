import React from "react"
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import NavBar from "../../components/ResidentPages/NavBar";
import List from "@material-ui/core/List";

export const ResidentRatingPage = () => {
    return(
        <>
            <Avatar/>
            <NavBar>
                <>
                    <Avatar/>
                    <Typography>Мой рейтинг</Typography>
                    <Typography>Ваш Рейтинг</Typography>
                    <Typography>Общий Рейтинг</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar/>
                            </ListItemAvatar>
                            <ListItemText primary={`Новая штука`} secondary={`менеджер`}/>
                        </ListItem>
                    </List>
                </>
            </NavBar>
        </>
    )
}