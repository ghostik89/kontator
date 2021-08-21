import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

export default function NewsCard({name, description, time}) {
    return (
        <Card sx={{ minWidth: 275, mb: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                    {name}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                    {time}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

NewsCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string
};

