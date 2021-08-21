import * as React from 'react';
import { styled, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import logo from '../../img/logo-white.svg'
import {useHistory} from "react-router-dom";
import {routes} from "../../helpers/routes";
import {BarChart, Description, Event, ExitToApp, Home} from "@material-ui/icons";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    background: 'linear-gradient(90deg, rgba(106,159,251,1) 61%, rgba(11,6,255,0.7413340336134453) 100%)'
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        background: 'linear-gradient(90deg, rgba(106,159,251,1) 61%, rgba(11,6,255,0.7413340336134453) 100%)',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const StyledImg = styled('img')(() => ({
    width: '20%'
}));


export default function NavBar(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory()

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <StyledImg src={logo} alt={logo}/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={false}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push(routes.mainResident)}>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => history.push(routes.ratingResident)}>
                        <ListItemIcon>
                            <BarChart/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => history.push(routes.docsResident)}>
                        <ListItemIcon>
                            <Description/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => history.push(routes.eventsResident)}>
                        <ListItemIcon>
                            <Event/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button onClick={() => history.push(routes.login)}>
                        <ListItemIcon>
                            <ExitToApp/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {props.children}
            </Box>
        </Box>
    );
}
