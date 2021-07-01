import React, {useContext} from 'react';
import {Button, Drawer, makeStyles, Typography} from '@material-ui/core';
import NewProjectForm from './NewProjectForm';
import ListProject from './ListProject';
import ProjectContex from '../../contex/projects/ProjectContext';


export const drawerWidth = 240;

const useStyles = makeStyles( theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper:{
        width: drawerWidth,
        backgroundColor: '#181721'
    },
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181721'
    },
    title: {
        fontWeight: 'bold',
        color: '#67dabb',
    },
    spanTitle: {
        fontSize: 20,
        color: '#E9E9E9'
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    btnNew:{
        width: '80%',
        padding: 10,
        marginTop: 10,
        marginBottom: 50,
        background: '#67dabb',
        color: '#181721',
        '&:hover': {
            background: '#62b8a1'
        }
    }
}));

const DrawerComponent = (props) => {
    const classes = useStyles();
    const newProject = useContext(ProjectContex);

    return ( 
        <Drawer 
            className={classes.drawer}
            variant= {props.variant}
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        > 
            <div className={classes.toolbar}>
                <Typography variant="h4" className={classes.title}>
                    Mern<span className={classes.spanTitle}>Tasks</span>
                </Typography>
            </div>
            
            <div className={classes.main}>
                <Button 
                    variant="contained"
                    classes={{
                        root: classes.btnNew
                    }}
                    onClick={() => newProject.showForm()}
                >
                    New Project
                </Button>
                <NewProjectForm/>
                <ListProject/>
            </div>
        </Drawer>
    );
}
 
export default DrawerComponent;