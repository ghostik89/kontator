import React from "react"
import {Container, Grid} from "@material-ui/core";
import Header from "../components/LandingPage/Header";
import EventsCard from "../components/EventsCard";
import NewsCard from "../components/LandingPage/NewsCard";

export const LandingPage = () => {
    return (
        <>
            <Header/>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <EventsCard description={"МероприятиеМероприятиеМероприятие"} name={"Мероприятие"}/>
                    </Grid>
                    <Grid item xs={3}>
                        <NewsCard name={"News"} description={"News"}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};
