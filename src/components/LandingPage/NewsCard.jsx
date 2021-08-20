import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

export default function NewsCard({name, description}) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {name}
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
    route: PropTypes.string
};

