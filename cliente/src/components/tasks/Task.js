import React, {useState} from 'react'
import { ListItem, makeStyles, ListItemText, ListItemSecondaryAction, Button, IconButton, Divider, } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(() =>({
    listItem: {
        //zIndex: 1,
        '&:hover': {
            background: 'rgba(241,222,250,0.275)',
        }
    },
    secondary: {
        color: '#E9E9E9',    
   },
    icon: {
        color: '#9a9a9a',
       // zIndex: 0,
        '&:hover': {
            background: '#1e1d2c',
            color: '#ffffff',
        }        
    },
    btnComplete: {
        padding: 3,
        fontSize: 10,
        textTransform: 'none',
        backgroundColor: '#67dabb',
        '&:hover': {
            background: '#62b8a1'
        }    
    },
    btnIncomplete: {
        padding: 3,
        fontSize: 10,
        textTransform: 'none',
        backgroundColor: '#d66058',
        '&:hover': {
            background: '#c2655f'
        }    
    },
    divider: {
       background: '#252433',
    },
}));


const Task = ({name, state}) => {
    const classes = useStyles();
    const [isHover, setIsHover] = useState(false);

    return ( 
        <div>
            <ListItem  
                className={classes.listItem}
            >
                <ListItemText 
                    secondary={name} 
                    classes={{ secondary: classes.secondary,}}
                />
                <ListItemSecondaryAction
                    
                >
                    <IconButton className={classes.icon}>
                        <EditIcon/>
                    </IconButton> 

                    <IconButton className={classes.icon}>
                        <DeleteIcon/>
                    </IconButton> 

                    {state ?
                    (
                        <Button 
                            variant="contained"  
                            //size="small"
                            className={classes.btnComplete}
                        >
                            Complete
                        </Button>
                    ):(
                        <Button 
                            variant="contained"  
                            size="small"
                            className={classes.btnIncomplete}
                        >
                            Incomplete
                        </Button>
                    )}
                </ListItemSecondaryAction> 
            </ListItem> 
            <Divider className={classes.divider}/>
        </div>
    );
}
 
export default Task;