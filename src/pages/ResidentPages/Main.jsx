import React from "react"
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import NavBar from "../../components/ResidentPages/NavBar";
import List from "@material-ui/core/List";

export const ResidentMainPage = () => {
    return(
        <>
            <Avatar/>
            <NavBar>
                <>
                    <Avatar/>
                    <Typography>Фамилия Имя Отчество</Typography>
                    <Typography>Ваша команда</Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar/>
                            </ListItemAvatar>
                            <ListItemText primary={`Новая штука`} secondary={`менеджер`}/>
                        </ListItem>
                    </List>
                    <Typography>
                        Ваша текущая площадь
                    </Typography>
                    <Typography>Тэги</Typography>
                </>
            </NavBar>
        </>
    )
}