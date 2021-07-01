import React, {useContext} from 'react'
import {Grid, Typography, List, makeStyles,} from '@material-ui/core'
import Task from './Task'
import ProjectContex from '../../contex/projects/ProjectContext';

const useStyles = makeStyles((theme) =>({
    container: {
        height: 'auto',
        padding: 30,
        marginTop: 60, 
        background: '#181721',
        borderRadius: 10,
    },
    title: {
        color: '#e9e9e9',
        marginBottom: 15,
    },
    noTasks: {
        marginTop: 25,
        fontSize: 12,
        color: '#e9e9e9'
    },
    list: {
        width: '100%',
        //maxWidth: 600,
        backgroundColor: '#181721',
    },
}));


const tasksProject = [
    {name: 'Elegir Plataforma', state: true},
    {name: 'Elegir colores', state: false},
    {name: 'Elegir tecnologias', state: false},
    {name: 'Elegir hosting', state: true} 
];


const ListTasks = () => {
    const classes = useStyles();
    const projectState = useContext(ProjectContex);
    const {projectSelected} = projectState;
    
    if (!projectSelected) {
        return(
            <Grid
                container item
                xs={12} sm={9} md={7}
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.container}
            > 
                
                <Typography variant="h5" className={classes.title} >
                    Select a project
                </Typography> 

            </Grid>
        )
    }
    const [project] = projectSelected;

    return (  
        <Grid
        container item
        xs={12} sm={9} md={7}
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
        > 
            <Typography variant="h5" className={classes.title} >
                {project.name}
            </Typography> 

            {tasksProject.length === 0 ?(
                <Typography className={classes.noTasks}>
                    Not tasks yet, add a new one...
                </Typography>
            ):(
                <List component="nav" className={classes.list}>
                    {tasksProject.map( task => (
                        <Task name={task.name} state={task.state}/>  
                    ))}
                </List>
            )} 

        </Grid>
    );
}
 
export default ListTasks;