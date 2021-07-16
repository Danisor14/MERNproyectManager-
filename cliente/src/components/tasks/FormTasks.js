import React, {useContext, useState, useEffect} from 'react'
import {Grid, TextField, Button, makeStyles} from '@material-ui/core'
import ProjectContex from '../../contex/projects/ProjectContext'
import TaskContext from '../../contex/tasks/TaskContext'


const useStyles = makeStyles(() => ({
    container: {
        height: 220,
        padding: 10,
        marginTop: 60, 
        background: '#181721',
        borderRadius: 10,
    },
    textFieldTask: {
        width: '80%',
        '& .MuiFilledInput-root':{
            backgroundColor: '#E9E9E9',
        },
        '& label.Mui-focused': {
            color: '#181721',
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#67dabb',
        },
        '& label.Mui-error':{
            color:'#d66058'
        },
        '& .MuiFormHelperText-root': {
            background: '#181721',
            color:'#d66058',
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
    const [formChange, setformChange] = useState('');

    const projectState = useContext(ProjectContex);
    const {projectSelected} = projectState;

    const taskState = useContext(TaskContext);
    const {addTask, showError, errorTask, getTasks, selectedTask, editTask} = taskState;


    useEffect(() => {
        if(selectedTask !== null){
            setformChange(selectedTask.name);
        }else {
            setformChange("");
        }
    }, [selectedTask])

    const handleChange = (e) => {
        setformChange(e.target.value);
        showError(false);
    }

    const handleSubmit = () => {
        //validation
        if(formChange.trim() === ''){
            showError(true);
            return
        }

        //edit or add tasks
        if(selectedTask === null){
            addTask({
                projectId: projectSelected[0].id,
                name: formChange,
                state: false,
            });
            setformChange('');
        }else {
            editTask({
                ...selectedTask,
                name: formChange
            });
        }

        //get tasks in order to render list task again
        getTasks(projectSelected[0].id);
    }


    if(!projectSelected) return null


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
                error={errorTask}
                helperText={ errorTask ? "Incorrect entry." : ""}
                value={formChange} 
                classes={{root: classes.textFieldTask}} 
                onChange={(e) => handleChange(e)} 
            />
            
            <Button 
                variant="contained"
                color="default"
                size="small"
                classes={{
                    root: classes.btnTask
                }}
                onClick={() => handleSubmit()}
            >
                {selectedTask ? 'Edit task' : 'Add task'}
            </Button>    
        </Grid>
    );
}
 
export default FormTask;