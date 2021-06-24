import React, { Fragment, useState } from 'react'
import {Hidden, makeStyles} from '@material-ui/core'
import DrawerComponent from './DrawerComponent'
import Header from './Header'
import FormTask from '../tasks/FormTasks'
import ListTasks from '../tasks/ListTasks'
import { drawerWidth } from './DrawerComponent';

const useStyles = makeStyles((theme) => ({
    offset:theme.mixins.toolbar, 
    margin:{
        marginTop: 80
    },
    container: {
        display: 'flex',
        height: '100vh',
        background: '#181721'
    },
    main: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            borderBottomLeftRadius: 40,
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-around', 
        },
        display: 'flex',
        flexDirection: 'column-reverse',
        height: 'auto',
        width: '100%',
        marginTop: 40,
        justifyContent: 'start', 
        alignItems: 'center',
        background: '#252433',
    }
}));


const Projects = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return ( 
        <div className={classes.container}>
            
            <Header handleOpen={handleOpen}/>
            <Hidden smDown>
                <DrawerComponent variant='permanent' open={true}/>
            </Hidden>
            <Hidden mdUp>
            <DrawerComponent 
                variant='temporary'
                open={open}
                onClose={() => handleOpen()}
            />
            </Hidden>
            <div className={classes.offset}></div>
            <div className={classes.main}>
                <ListTasks/>                 
                <FormTask/> 
            </div>  
            
        </div>
    );
}
 
export default Projects;
