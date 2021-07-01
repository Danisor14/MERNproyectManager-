import React, { Fragment, useContext, useEffect, useState } from 'react'
import {Typography, List, ListItem, ListItemText, Divider, makeStyles, ListItemSecondaryAction,IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ProjectContex from '../../contex/projects/ProjectContext'


const useStyles = makeStyles(() => ({
    title: {
        fontSize: 20,
        color: '#E9E9E9'
    },
    list: {
        width: '100%',
    },
    container: {
        '&:hover': {
            background: 'rgba(241,222,250,0.275)',
        } ,
    },
    secondary: {
         color: '#E9E9E9',    
         marginRight: 10
    },
    divider: {
        background: '#27253d'
    },
    root:{
        '&:focus': {
            background: 'rgba(241,222,250,0.275)',
        },
    },
    icon: {
        color: '#9a9a9a',
        '&:hover': {
            background: '#1e1d2c',
            color: '#ffffff',
        }        
    },
}));

const ListProject = () => {
    const classes = useStyles();
    const projectsState = useContext(ProjectContex);
    const {projects, getProjects, selectProject, deleteProject} = projectsState;
    const [hover, setHover] = useState(false);


    //get projects when the component has been mounted
    useEffect(() => {
        getProjects();
    }, []);
   
    
    if (projects.length === 0) return null 

    
    return (  
        <Fragment>
            <Typography variant="h5" className={classes.title}>
                        Projects
            </Typography>

            <List component="nav" className={classes.list}>
                {projects.map((project) =>( 
                    <div 
                        className={classes.container}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        key={project.id}
                    >
                        <ListItem 
                            button
                            classes={{
                                root: classes.root
                            }}
                            onClick={() => selectProject(project.id)}
                        >
                            <ListItemText 
                                secondary={project.name} 
                                classes={{
                                    secondary: classes.secondary,
                                }}
                            /> 
                            <ListItemSecondaryAction>
                            {hover ?(
                                   
                                    <IconButton 
                                        className={classes.icon}
                                        onClick={() => deleteProject(project.id)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                    
                        
                            ): null}
                            </ListItemSecondaryAction>
                            
                        </ListItem>
                        <Divider variant="middle" className={classes.divider}  key={project.id}/>
                    </div>


                ))} 
            </List>
        </Fragment>
    );
}
 
export default ListProject;