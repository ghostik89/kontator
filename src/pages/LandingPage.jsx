import React, {useEffect, useState} from "react"
import {CircularProgress, Container, Grid, Typography} from "@material-ui/core";
import Header from "../components/LandingPage/Header";
import EventsCard from "../components/EventsCard";
import NewsCard from "../components/LandingPage/NewsCard";
import landingBody from "../img/landing-body.svg"
import { styled } from '@material-ui/core/styles';
import {Copyright} from "../components/Copyright";
import axios from "axios";


const StyledImg = styled('img')(({theme}) => ({
    width: '100%',
    marginBottom: theme.spacing(4)
}));

export const LandingPage = () => {
    const [events, setEvents] = useState(null)

    useEffect(() => {
        axios.get('events/allCurrent', {
            baseURL: 'https://www.visdom.tech/kontactor-dev-0.1/'
        })
            .then(res => {
                setEvents(res.data)
                console.table(res.data)
            })
            .catch(() => setEvents([]))
    },[])

    return (
        <>
            <Header/>
            <StyledImg src={landingBody} alt={'body'}/>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Typography component={'h2'} variant={'h3'} gutterBottom>Текущие мероприятия</Typography>
                        <Grid container spacing={2}>
                            {events? <>
                                {events.map((elem) => (
                                    <Grid item key={`landing-event-card-${elem.id}`}>
                                        <EventsCard
                                            description={elem.description}
                                            name={elem.name}
                                        />
                                    </Grid>

                                ))}
                            </>:<CircularProgress/>}
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component={'h2'} variant={'h4'} gutterBottom>
                            Последние новости
                        </Typography>
                        {[0,1,2,3,4].map((elem) => (
                            <NewsCard
                                key={`news-card-${elem}`}
                                name={"News"}
                                description={"News"}
                                time={'12.09.2021'}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
            <Copyright/>
        </>
    )
};
