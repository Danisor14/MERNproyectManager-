import React, {Fragment, useState, useContext} from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import ProjectContex from '../../contex/projects/ProjectContext'


const useStyles = makeStyles(() => ({
    textFieldCreate: { 
        '& .MuiFilledInput-root':{
            background: '#E9E9E9',
        },
        '& label.Mui-focused': {
            color: '#181721',
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#67dabb'
        },
        '& label.Mui-error':{
            color:'#d66058'
        },
        '& .MuiFormHelperText-root': {
            background: '#181721',
            color:'#d66058',
        },
    },
    helperText: {
        background: '#181721',
        color:'#d66058',
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
    const [errorForm, setErrorForm] = useState(false);

    const newFormContex = useContext(ProjectContex);
    const {form, addProject} = newFormContex;

   
    const handleChange = (e) => {
        setProjectName({
            ...projectName,
            [e.target.name]: e.target.value
        });
        setErrorForm(false);
    }


    const handleClick = () => {
        //validations
        if(projectName.name === ''){
            setErrorForm(true);
            return;
        } 

        addProject(projectName);
        //clean textField or reset form
        setProjectName({
            name: ''
        });
    }

    return (  
        <Fragment>
            {form ?(
                <Fragment>
                    <TextField  
                        label="Name"
                        variant="filled"
                        name="name"
                        size="small"
                        autoFocus={true}
                        value={projectName.name}
                        error={errorForm}
                        helperText={ errorForm ? "Incorrect entry." : ""}
                        classes={{root: classes.textFieldCreate,}} 
                        onChange={(e) => handleChange(e)} 
                    /> 
                    <Button 
                        variant="contained"
                        classes={{
                            root: classes.btnCreate
                        }}
                        onClick={(e) => handleClick()}
                    >
                        Create project
                    </Button>
                </Fragment> 
            ):null}  
        </Fragment>  
    );
}
 
export default NewProjectForm;