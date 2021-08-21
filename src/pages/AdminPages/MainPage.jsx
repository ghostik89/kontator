import React from "react"
import PageContainer from "../../containers/PageContainer";
import {Avatar, Card, Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

export const MainPageAdmin = () => {

    const Resident = (props) => {
        return (
            <Card variant={'outlined'} sx={{ display: 'flex', p: 2, mt: 1, cursor: 'pointer', ":hover": { backgroundColor: '#f3f3f3' } }}>
                <Avatar
                    sx={{ width: 130, height: 130 }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07AZM--5X37uht9iZAuOl7lnsaRS8qCMLLw&usqp=CAU"
                    variant="rounded"
                />
                <Box sx={{ mx: 2 }}>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Typography variant={'h6'}>
                                ООО "Cyber Tech"
                            </Typography>
                        </Grid>
                        <Grid item sx={props.isPaid ? { color: 'green' } : { color: 'red' }}>
                            {props.isPaid? 'Все счета оплачены':'Внимание! Не оплачены счета ЖКХ'}
                        </Grid>
                    </Grid>
                    <Typography variant={'subtitle1'} color="text.secondary">
                        <EmojiEventsIcon sx={{ color: '#fbbd04', mr: 1 }}/>
                        Рейтинг: 155 место
                    </Typography>
                    <Typography sx={{ mt: 3 }}>
                        orem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum ornare purus, eget rutrum eros mollis et. Sed eget neque leo. Aliquam erat volutpat. Praesent fermentum accumsan dolor et cursus. Aenea
                    </Typography>
                </Box>
            </Card>
        )
    }

    return (
        <PageContainer>
            <Typography variant={'h5'}>Мои резиденты</Typography>
            <Resident isPaid={true} />
            <Resident isPaid={false} />
            <Resident isPaid={true} />
            <Resident isPaid={false} />
        </PageContainer>
    )}
