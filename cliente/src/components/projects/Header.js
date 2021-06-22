import React from 'react'
import {makeStyles, AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { drawerWidth } from './DrawerComponent';

const useStyles = makeStyles( theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: "#252433",
        borderTopLeftRadius: 40
    },
    toolbar:{
        paddingTop: 25
    },
    helloContainer: {
        flexGrow: 1,
    },
    welcomeText:{
        fontSize: 10
    },
    btnLogOut: {
        textTransform: 'none'
    }
}));


const Header = ({handleOpen}) => {
    const classes = useStyles();

    return (  
        <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu-icon"
                        onClick={() => handleOpen()}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={classes.helloContainer}>
                        <Typography variant="h5">
                            Hello, Kivi
                        </Typography>
                        <Typography className={classes.welcomeText}>
                            Welcome back!
                        </Typography> 
                    </div>
    
                    <Button 
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<ExitToAppOutlinedIcon/>}
                        classes={{
                            root: classes.btnLogOut
                        }} 
                    >
                        Log out
                    </Button>
                </Toolbar>
            </AppBar>
    );
}
 
export default Header;