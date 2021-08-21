import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import * as React from "react";


export const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                MegGuren
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}