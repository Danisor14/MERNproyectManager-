import React from 'react'
import {List, ListItem, ListItemText, Divider, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(() => ({
    secondary: {
         color: '#E9E9E9',    
    },
    divider: {
        background: '#27253d'
    },
    root:{
        '&:hover, &:focus': {
            background: 'rgba(241,222,250,0.275)',
        },
    }
}));

const ListProject = () => {
    const classes = useStyles();

    const projects = [
        {name: 'Conseguir trabajo'},
        {name: 'Mi tregueñita hermosa'},
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
                    </ListItem>
                    <Divider variant="middle" className={classes.divider}/>
                </div>
            ))}
        </List>
    );
}
 
export default ListProject;