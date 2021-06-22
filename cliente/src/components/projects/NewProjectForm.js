import React, {Fragment, useState} from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'


const useStyles = makeStyles(() => ({
    textFieldCreate: {
        /* height: 50, */
        /* color: '#E9E9E9', */
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
    btnCreate: {
        width: '80%',
        padding: 10,
        marginTop: 10,
        marginBottom: 50,
        background: '#67dabb',
        color: '#181721',
        '&:hover': {
            background: '#62b8a1'
        }
    },
}));


const NewProjectForm = () => {
    const classes = useStyles();
    const [projectName, setProjectName] = useState({
        name: ''
    });

    const handleChange = (e) => {
        setProjectName({
            ...projectName,
            [e.target.name]: e.target.value
        });
    }

    return (  
        <Fragment>
            <TextField  
                label="Name"
                variant="filled"
                name="name"
                value={projectName.name}
                classes={{
                    root: classes.textFieldCreate
                }} 
                onChange={(e) => handleChange(e)} 
            />
            <Button 
                variant="contained"
                classes={{
                    root: classes.btnCreate
                }}
            >
                Create project
            </Button>
        </Fragment>
    );
}
 
export default NewProjectForm;