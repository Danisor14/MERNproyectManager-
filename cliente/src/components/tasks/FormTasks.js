import React from 'react'
import {Grid, TextField, Button, makeStyles} from '@material-ui/core'


const useStyles = makeStyles(() => ({
    container: {
        height: 220,
        padding: 10,
        marginTop: 60, 
        background: '#181721',
        borderRadius: 10,
    },
    textFieldTask: {
        /* height: 50, */
        /* color: '#E9E9E9', */
        width: '80%',
        background: '#E9E9E9',
        /* '& label': {
            color: '#181721', 
        }, */
        '& label.Mui-focused': {
            color: '#181721',
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#67dabb',
        },
    },
    btnTask: {
        width: '80%',
        padding: 10,
        marginTop: 10,
        textTransform: 'none',
        //background: '#67dabb',
        //color: '#181721',
        /* '&:hover': {
            background: '#62b8a1'
        } */
    }
}));


const FormTask = () => {
    const classes = useStyles();

    return ( 
        <Grid
            container item
            sm={9}  md={3}
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <TextField  
                label="Task name"
                variant="filled"
                name="taskName"
                /* value={projectName.name} */
                classes={{
                    root: classes.textFieldTask
                }} 
                /* onChange={(e) => handleChange(e)}  */
            />
            <Button 
                variant="contained"
                color="default"
                size="small"
                classes={{
                    root: classes.btnTask
                }}
            >
                Add Task
            </Button>    
        </Grid>
    );
}
 
export default FormTask;