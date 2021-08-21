import React from "react"
import {Avatar, Typography} from "@material-ui/core";
import NavBar from "../../components/ResidentPages/NavBar";

export const ResidentDocumentsPage = () => {
    return(
        <>
            <Avatar/>
            <NavBar>
                <>
                    <Typography>Ваши мероприятия</Typography>
                </>
            </NavBar>
        </>
    )
}