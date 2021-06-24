import React from 'react'
import {List, ListItem, ListItemText, Divider, makeStyles, ListItemSecondaryAction,IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    secondary: {
         color: '#E9E9E9',    
         marginRight: 10
    },
    divider: {
        background: '#27253d'
    },
    root:{
        '&:hover, &:focus': {
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

    const projects = [
        {name: 'Conseguir trabajo'},
        {name: 'Hacer una pagina web'},
        {name: 'Comprar el pc'}
    ];

    return (  
        <List component="nav">
            {projects.map(project =>(
                <div>
                    <ListItem 
                        button
                        classes={{
                            root: classes.root
                        }}
                    >
                        <ListItemText 
                            secondary={project.name} 
                            classes={{
                                secondary: classes.secondary,
                            }}
                        /> 

                        <ListItemSecondaryAction>
                            <IconButton className={classes.icon}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="middle" className={classes.divider}/>
                </div>
            ))}
        </List>
    );
}
 
export default ListProject;