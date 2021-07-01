import React, { useReducer } from 'react'
import ProjectContex from './ProjectContext'
import ProjectReducer from './ProjectReducer'
import { v4 as uuidv4 } from 'uuid'
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECTS, 
    SELECT_PROJECT, 
    DELETE_PROJECT,
} from '../../types'


const ProjectState = (props) => {
    const initialState = {
        projects: [],
        newProjectForm: false,
        projectSelected: null,
    }


    const projects = [
        {id: 0, name: 'Conseguir trabajo'},
        {id: 1, name: 'Hacer una pagina web'},
        {id: 2, name: 'Comprar el pc'} 
    ]


    // Dispatch
    const [state, dispatch] = useReducer(ProjectReducer, initialState)
    

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }


    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }


    const addProject = (project) => {
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECTS,
            payload: project
        })
    }


    const selectProject = (projectId) => {
        dispatch({
            type: SELECT_PROJECT,
            payload: projectId
        })
    }


    const deleteProject = (projectId) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    } 

    return (  
        <ProjectContex.Provider 
            value={{
                projects: state.projects,
                form: state.newProjectForm,
                projectSelected: state.projectSelected,
                getProjects,
                showForm,
                addProject,
                selectProject,
                deleteProject,
            }}
        >
            {props.children}
        </ProjectContex.Provider>
    );
}
 
export default ProjectState;